let fs = require('fs');
let electron = require('electron');
let path = require('path');
let youtubeTemplate = require('../data/gen/youtube');
let audioTemplate = require('../data/gen/audio');
let customTemplate = require('../data/gen/file');

let child_process = require('child_process');
let stream = require('stream');
let crypto = require('crypto');
let CONFIG = require('../DB/config');
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;

let randomID = function(){
  return crypto.randomBytes(8).toString('base64');
}


let apps = {}
module.exports = class socket_electron{
  constructor(socket ,db ,Sockets){
    this.youtubePath = path.resolve(__dirname , '../data/gen/youtube.html');
    this.audioPath = path.resolve(__dirname , '../data/audio');
    this.windowsPath = path.resolve(__dirname , '../data/windows');
    this.self = this;
    socket.on('create-browser-window',this.createBrowserWindow.bind(this));
    socket.on('destroy-browser-window',this.destroyBrowserWindow.bind(this));
    socket.on('create-audio-buffer', this.createAudioBuffer.bind(this));


    socket.on('seek-audio' ,function(seekTo){
      socket.emit('seek-audio' ,seekTo);
      socket.broadcast.emit('seek-audio' ,seekTo);
      Sockets.logger.broadcast.emit('log',{event:'seeking audio' ,value:seekTo});
    });

    socket.on('audio-action' ,function(action){
      socket.emit('audio-action' ,action);
      socket.broadcast.emit('audio-action' ,action);
      Sockets.logger.broadcast.emit('log',{event:'audio-action' ,value:action});
    });

    socket.on('change-volume' ,function(volume){
      socket.emit('change-volume' ,volume);
      socket.broadcast.emit('change-volume' ,volume);
      Sockets.logger.broadcast.emit('log',{event:'changing volume' ,value:volume});
    });

    this.paths = {
      file:path.resolve(__dirname ,'../data/intros'),
      audio:path.resolve(__dirname ,'../data/audio'),
      youtube:path.resolve(__dirname ,'../data/gen/youtube.html'),
    }
    this.timeout = null;
    this.socket = socket;
    this.Sockets = Sockets;
  }
  createAudioBuffer(filename){
    let {socket ,Sockets ,audioPath} = this;
    let data = '';
    let stream = fs.createReadStream(`${audioPath}/${filename}`);
    Sockets.logger.broadcast.emit('log',{event:'creating audio buffer' ,value:filename ,dir:`${this.audioPath}/${filename}`});
    stream.setEncoding('binary');
    stream.on('data', e => (data += e));
    stream.on('error', e =>{
      Sockets.logger.broadcast.emit('fail',{event:'error creating audio buffer' ,value:e.toString()});
    });
    stream.on('end' ,()=>{
      socket.emit('audio-buffer',data);
      //socket.broadcast.emit('audio-buffer',data);
      Sockets.logger.broadcast.emit('log',{event:'emmiting audio buffer' ,value:filename ,dataLength:data.length});
    });
  }
  createBrowserWindow(filename, type, config){
    let {socket , Sockets} = this;
        let timeout = config.timeout || 5000;
        let autoScale = config.dims && typeof config.dims.auto === 'boolean' ? config.dims.auto : false;
        let scaleFactor = config.dims && typeof config.dims.scale === 'number' ? config.dims.scale : 1;
        let width = (config.dims && typeof config.dims.width === 'number' && config.dims.width) || Sockets.screen.width / 2;
        let height = (config.dims && typeof config.dims.height === 'number' && config.dims.height) || Sockets.screen.height / 2;
        let filePath = this.paths[type];
        let frame = typeof config.frame === 'boolean' ? config.frame : true;
        let show = typeof config.show === 'boolean' ? config.show : true;

        if(!config.id){
          config.id  = randomID();
        }
        let center = {
          x:Sockets.screen.width /2,
          y:Sockets.screen.height /2
        }
        let x = (center.x - width)/2;
        let y = (center.y - height)/2;


        if(autoScale){ //if autoscale then width / height will be based from screen size else it will be pixels
          width = Math.floor(width * scaleFactor);
          height = Math.floor(height * scaleFactor);
        }

        if(config.pos && (typeof config.pos.y === 'number' || typeof config.pos.x === 'number')){

            //percentage base!!
            x = Math.floor((Sockets.screen.width * config.pos.x)) || 0;
            y = Math.floor((Sockets.screen.height * config.pos.y)) || 0;

        }

          let overwrite = Object.assign(config ,{
            id:config.id,
            width:width,
            height:height,
            frame:frame,
            show:show,
            center:false,
            x:x,
            y:y,
            nodeIntegration:false,
            webPreferences:{
              webSecurity:false,
              allowDisplayingInsecureContent:true,
              allowRunningInsecureContent:true
            }
          });
          if(!config.mediaType){
            Sockets.logger.broadcast.emit('fail' ,{event:'failed creating browser window. need mediatype ' ,value:overwrite});
            return
          }

         Sockets.logger.broadcast.emit('log' ,{event:'Creating browser window' ,value:overwrite});

          switch(type){
        case 'url':{
          try{
              apps[config.id] = new electron.BrowserWindow(overwrite);
              apps[config.id].loadURL(config.mediaType.src);
          }catch(err){
            Sockets.logger.broadcast.emit('fail' ,{event:'error creating browser window' ,value:err.toString()});
          }

        }break;
        case 'file':{
          try{
            apps[config.id] = new electron.BrowserWindow(overwrite);
            apps[config.id].loadURL(`file:///${filePath}\\${config.id}\\${config.mediaType.src}.html`);
          }catch(err){
            Sockets.logger.broadcast.emit('fail' ,{event:'error creating browser window' ,value:err.toString()});

          }


        }break;
        case 'audio':{
          try{

            let audio = audioTemplate(filename, (config.volume || 1), IP, CONFIG.ports.main);
            let encoded = encodeURIComponent(audio);

            apps[config.id] = new electron.BrowserWindow(overwrite);
            apps[config.id].loadURL(`data:text/html, ${encoded}`);
            fs.writeFile('out3.txt' , encoded);
          }catch(err){
            Sockets.logger.broadcast.emit('fail' ,{event:'error creating browser window' ,value:err.toString()});
            Sockets.logger.broadcast.emit('log' ,{event:'error creating browser window' ,value:err.toString()});
          }


        }break;
        case 'youtube':{
          try{
            let youtube = youtubeTemplate(config);
            let encoded = encodeURIComponent(youtube);
            apps[config.id] = new electron.BrowserWindow(overwrite);
            apps[config.id].loadURL(`data:text/html, ${encoded}`);
          }catch(err){
            Sockets.logger.broadcast.emit('fail' ,{event:'error creating browser window' ,value:err.toString()});
          }


        }break;
        case 'custom':{
          try{
            let custom = customTemplate(config.deps , config.userScripts ,config.stylesheets, config.innerHTML);
            let encoded = encodeURIComponent(custom);
            apps[config.id] = new electron.BrowserWindow(overwrite);
            apps[config.id].loadURL(`data:text/html, ${encoded}`);
          }catch(err){
            Sockets.logger.broadcast.emit('fail' ,{event:'error creating browser window' ,value:err.toString()});
          }

        };break;
        case 'picture':{}break;
      }



    this.timeout = setTimeout(()=>{
      this.destroyBrowserWindow(config.id);
    },timeout);
  }
  destroyBrowserWindow(name){
    let {socket , Sockets} = this;
    if(apps[name]){
      try{

        Sockets.logger.broadcast.emit('log',{event:`destroying '${name}' instance` ,value:name})
        apps[name].close()
      }catch(e){
        Sockets.logger.broadcast.emit('fail',{event:`destroying '${name}' instance Error` ,value:name ,error:e.toString()})
      }


    }
  clearTimeout(this.timeout);
  }


}
