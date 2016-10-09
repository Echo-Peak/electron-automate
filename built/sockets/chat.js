let fs = require('fs');
let crypto = require('crypto');

module.exports = class socket_chat{
  constructor(socket ,db ,Sockets){
    this.Sockets = Sockets;
    this.self = this;
    this.socket = socket;
    this.db = db;
    this.total = [];
    socket.on('send-message' ,(msg)=>{
      if(this.total.length > 100){
        //dump
      }
      this.total.push(msg);

      socket.emit('new-message' ,msg);
      socket.broadcast.emit('new-message' ,msg);
      Sockets.logger.broadcast.emit('log',{event:'sending msg' ,value:msg.msg ,who:msg.name})
    });
  }
  dump(){

  }
}
