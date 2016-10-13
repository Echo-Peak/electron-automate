let fs = require('fs');
let electron = require('electron');
let path = require('path');
let child_process = require('child_process');
let stream = require('stream');


//interfaces with dynamic browser window only
module.exports = class socket_dynamic{
  constructor(socket ,db ,Sockets){

    socket.on('volume-change' ,(volume)=>{
      Sockets.logger.emit('log' ,{event:'changing volume' ,value:volume});
      socket.emit('volume-change' ,volume);
      socket.broadcast.emit('volume-change' ,volume);
    });

    socket.on('youtube-url' ,(videoID)=>{
      Sockets.logger.emit('log' ,{event:'changing youtube video id' ,value:videoID});
      socket.emit('youtube-url' ,videoID);
      socket.broadcast.emit('youtube-url' ,videoID);
    });

    socket.on('seek' ,(seekTo)=>{
      Sockets.logger.emit('log' ,{event:'seeking' ,value:seekTo});
      socket.emit('seek' ,seekTo);
      socket.broadcast.emit('seek' ,seekTo);
    });

    socket.on('audio-file' ,(filename)=>{
      Sockets.logger.emit('log' ,{event:'changeing audio file' ,value:filename});
      socket.emit('audio-file' ,filename);
      socket.broadcast.emit('audio-file' ,filename);
    });
    socket.on('audio-mute' ,(bool)=>{
      Sockets.logger.emit('log' ,{event:'changeing volume mute' ,value:bool});
      socket.emit('audio-mute' ,bool);
      socket.broadcast.emit('audio-mute' ,bool);
    });
    socket.on('playback-toggle' ,(bool)=>{
      Sockets.logger.emit('log' ,{event:'toggling playback' ,value:bool});
      socket.emit('playback-toggle' ,bool);
      socket.broadcast.emit('playback-toggle' ,bool);
    });
    socket.on('playback-stop',()=>{
      Sockets.logger.emit('log' ,{event:'stoping playback' ,value:''});
      socket.emit('playback-stop');
      socket.broadcast.emit('playback-stop');
    });

    socket.on('picture-file',(filename)=>{
      Sockets.logger.emit('log' ,{event:'changing picture' ,value:filename});
      socket.emit('picture-file' ,filename);
      socket.broadcast.emit('picture-file' ,filename);
    });

    socket.on('window-pos',(pos)=>{
      Sockets.logger.emit('log' ,{event:'setting browser window positions' ,value:pos});
      socket.emit('window-pos' ,pos);
      socket.broadcast.emit('window-pos' ,pos);
    });
    socket.on('window-dims',(dims)=>{
      Sockets.logger.emit('log' ,{event:'setting browser window dimensions' ,value:dims});
      socket.emit('window-dims' ,dims);
      socket.broadcast.emit('window-dims' ,dims);
    });
    socket.on('window-timeout',(delay)=>{
      Sockets.logger.emit('log' ,{event:'setting browser window timeout' ,value:delay});
      socket.emit('window-timeout' ,delay);
      socket.broadcast.emit('window-timeout' ,delay);
    });
    socket.on('window-settings',()=>{

    });
    socket.on('window-toggle',(bool)=>{
      Sockets.logger.emit('log' ,{event:'toggleing browser window' ,value:bool});
      socket.emit('window-toggle' ,bool);
      socket.broadcast.emit('window-toggle' ,bool);
    });
  }

}
