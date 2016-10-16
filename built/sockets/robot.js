let fs = require('fs');
let path = require('path');

module.exports = class socket_robot{
  constructor(socket , db ,Sockets){
    let mousePath = path.resolve(__dirname ,'../data/gen/mouse.json');
    let keyboardPath = path.resolve(__dirname ,'../data/gen/keyboard.json');
    socket.on('robot-screen' ,(screen)=>{
      Sockets.logger.emit('log' ,{event:'robot-get-screen' ,value:screen})
      socket.emit('robot-screen',screen);
      socket.broadcast.emit('robot-screen',screen);
      Sockets.emit('screen' , screen);
    });
    socket.on('exec-mouse-record' ,function(record){
      Sockets.logger.emit('log' ,{event:'exec-mouse-record' ,value:record.length})
      socket.broadcast.emit('mouse-record' ,record);
      socket.emit('mouse-record', record);
    });
    socket.on('stop' ,function(){
      Sockets.logger.emit('log' ,{event:'stopping current mouse action' ,value:''})
      socket.broadcast.emit('stop');
      socket.emit('stop');
    });

    socket.on('get-robot-screen' ,function(){
      Sockets.logger.emit('log' ,{event:'get-robot-screen' ,value:''})
      socket.broadcast.emit('get-robot-screen');
      socket.emit('get-robot-screen');
    });
    socket.on('get-keyboard-shortcuts' ,function(){
      fs.readFile(keyboardPath ,(err ,res)=>{
        if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'get-keyboard-shortcuts ERROR' ,value:err.toString()});
        }else{
          socket.emit('keyboard-shortcuts' ,res.toString());
          socket.broadcast.emit('keyboard-shortcuts' ,res.toString());
          Sockets.logger.broadcast.emit('log' ,{event:'get-keyboard-shortcuts SUCCESS' ,value:res.toString().length});
        }
      })
    });

    socket.on('move-mouse' ,function(cords){
      Sockets.logger.emit('log' ,{event:'moving mouse to' ,value:cords});
      socket.emit('robot-move-mouse' ,cords);
      socket.broadcast.emit('robot-move-mouse' ,cords);
    });

    socket.on('mouse-click' ,function(leftRight){
      socket.broadcast.emit('mouse-click' ,leftRight);
      socket.emit('mouse-click' ,leftRight);
      Sockets.logger.emit('log' ,{event:'mouse-click' ,value:leftRight});
    });

    socket.on('execute-mouse-function' ,function(item){
      Sockets.logger.emit('log' ,{event:'execute-mouse-function' ,value:item});
      socket.emit('execute-mouse-function' ,item);
      socket.broadcast.emit('execute-mouse-function' ,item);
    });

    socket.on('robot-prep-keyboard-shortcuts' ,(shortcuts)=>{
      Sockets.logger.emit('log' ,{event:'robot-prep-keyboard-shortcuts' ,value:shortcuts})
    });

    socket.on('robot-keyToggle' ,(key)=>{
      Sockets.logger.emit('log' ,{event:'robot-keyToggle' ,value:key});
      socket.broadcast.emit('robot-keyToggle',key);
    });

    socket.on('robot-keyTap' ,(key)=>{
      Sockets.logger.emit('log' ,{event:'robot-keyTap' ,value:key})
      socket.broadcast.emit('robot-keyTap',key);
    });

    socket.on('robot-typeString' ,(key)=>{
      Sockets.logger.emit('log' ,{event:'robot-typeString' ,value:key})
      socket.broadcast.emit('robot-typeString',key);
    });
    socket.on('get-mouse-functions' ,()=>{

      fs.readFile(mousePath ,(err ,res)=>{
        if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'get-mouse-functions ERROR' ,value:err.toString()});
        }else{
          socket.emit('mouse-functions' ,res.toString());
          socket.broadcast.emit('mouse-functions' ,res.toString());
          Sockets.logger.broadcast.emit('log' ,{event:'get-mouse-functions SUCCESS' ,value:res.toString()});
        }
      })
    })

  }
}
