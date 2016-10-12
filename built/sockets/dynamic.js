let fs = require('fs');
let electron = require('electron');
let path = require('path');
let child_process = require('child_process');
let stream = require('stream');
let CONFIG = require('../DB/config');

let randomID = function(){
  return crypto.randomBytes(8).toString('base64');
}



//interfaces with dynamic browser window only
module.exports = class socket_dynamic{
  constructor(socket ,db ,Sockets){

    socket.on('volume-change' ,()=>{

    });
    socket.on('youtube-url' ,()=>{

    });
    socket.on('audio-file' ,()=>{

    });
    socket.on('playback-toggle' ,()=>{

    });
    socket.on('playback-stop',()=>{
    });

    socket.on('picture-file',()=>{
    });

    socket.on('window-pos',()=>{

    });
    socket.on('window-dims',()=>{
      
    });
    socket.on('window-timeout',()=>{

    });
    socket.on('window-settings',()=>{

    });
  }

}
