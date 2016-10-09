let fs = require('fs');
let crypto = require('crypto');

module.exports = class socket_crypto{
  constructor(socket ,config ,Sockets){
    this.config = config;
    this.socket = socket;
    this.users = {};

    socket.on('check' ,(secret , plaintext , who)=>{

      if(this.users[who.name]){
        return
      }

      if(!secret || !plaintext || !who){
        socket.emit('status' ,{status:false ,value:'failed to check',who});
        Sockets.getSockets().logger.broadcast.emit('fail',{event:'crypto check fail',who})
        return
      }
      this.users[who.name] = {};
      const decipher = crypto.createDecipher('aes192', secret);
      var decrypted = '';
      try{


      decipher.on('readable', () => {
        var data = decipher.read();
        if (data){
          decrypted += data.toString('utf8');

        }
      });
      decipher.on('end', () => {
        let roles = config.security.roles;
        let keys = Object.keys(roles);

        keys.forEach((role)=>{
          let _key = roles[role];
          if(decrypted === _key){

            this.users[who.name].role = role;
            socket.emit('status' ,{status:true ,role , who});
            Sockets.emit('spawn-app' ,{who ,role ,config:this.users[who.name]});
            Sockets.getSockets().logger.emit('log',{event:'crypto check success!',who ,role});
            Sockets.getSockets().logger.broadcast.emit('log',{event:'crypto check success!',who ,role});

          }
        });


      });
      decipher.write(plaintext, 'hex');
      decipher.end();
    }catch(e){
      console.log(e.toString())
      socket.emit('status' ,{status:false ,value:'failed to check',who});
      Sockets.getSockets().logger.broadcast.emit('fail',{event:'crypto check failed!',who})
    }


    })
  }
}
