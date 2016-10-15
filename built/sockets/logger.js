module.exports = class socket_logger{
  constructor(socket, db , Sockets){
    socket.on('log',(msg)=>{
      console.log('LOG:',msg);
      socket.emit('log',msg);
      socket.broadcast.emit('log',msg);
    });
    socket.on('fail',(msg)=>{
      console.log('ERROR:',msg);
      socket.emit('fail',msg);
      socket.broadcast.emit('fail',msg);
    });
    socket.on('fatal',(error)=>{
      console.log('FATAL:',error);
      socket.emit('fatal', error);
      socket.broadcast.emit('warn', error);
    });
  }
}
