let events = require('events');
module.exports = class Users extends events{
  constructor(userDB){
    this.active = {};
    this.users = userDB.getData(`/users`);
  }
  verify(authObj){
    if(!this.users[authObj.uid]){
      this.emit('auth-error' ,'you are not authed');
    }else{
      let user = {user:authObj.displayName ,level:this.users[authObj.uid].level ,uid:authObj.uid};
      if(!this.active[authObj.displayName]){
        this.active[authObj.displayName] = user;
      }
      this.emit('auth-success' ,user);
    }
  }
  removeActiveUser(){

  }
  getActiveUser(){

  }


}
