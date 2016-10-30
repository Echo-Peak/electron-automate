module.exports = class socket_logger{
  constructor(socket, db , Sockets){
    let logging = ~process.argv.indexOf('--logging') ? true : false;
    socket.on('log',(msg)=>{
      console.log('LOG:',msg);
      logging && socket.emit('log',msg);
      logging && socket.broadcast.emit('log',msg);
    });
    socket.on('fail',(msg)=>{
      console.log('ERROR:',msg);
      logging && socket.emit('fail',msg);
      logging && socket.broadcast.emit('fail',msg);
    });
    socket.on('fatal',(error)=>{
      console.log('FATAL:',error);
      logging && socket.emit('fatal', error);
      logging && socket.broadcast.emit('warn', error);
    });
    socket.on('re-broadcast' ,(type ,payload)=>{
      logging && socket.emit(type, payload);
      logging && socket.broadcast.emit(type, payload);
    });
    socket.on('SYSTEM-HANDLER' ,(msg)=>{
      console.log('SYSTEM-HANDLER',msg);
    });
  }
}
