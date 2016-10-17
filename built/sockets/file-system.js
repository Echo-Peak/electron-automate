let fs = require('fs-extra');
let path = require('path');
let mkdirp = require('mkdirp');
let customTemplate = require('../data/gen/file');

let baseWindowConfig = {
  "dims":{
    "auto":true,
    "scale":0.5,
    "width": 600,
    "height": 900
  },
  mediaType:{
    type:''
  },
  nodeIntegration:false,
  "center": true,
  "timeout": 29000,
  "alwaysOnTop": true,
  "skipTaskbar": false,
  "title": "",
  "hasShadow": true,
  "frame": false,
  "show": true,
  "moveable": true
}

module.exports = class socket_fileSystem{
  constructor(socket ,db , Sockets){
    this.scriptsPath = path.resolve(__dirname ,'../data/scripts');
    this.audioPath = path.resolve(__dirname ,'../data/audio');
    this.windowsPath = path.resolve(__dirname ,'../data/windows');
    this.taskPath = path.resolve(__dirname ,'../data/tasks');
    let self = this;

    this.self = this;
    this.socket = socket;
    this.Sockets = Sockets;
    socket.on('save-script' ,this.saveScript.bind(this));
    socket.on('save-audio' ,this.saveAudio.bind(this));
    socket.on('delete-audio' ,this.deleteAudio.bind(this));
    socket.on('get-window-list' ,this.windowList.bind(this));
    socket.on('save-window' , this.saveWindow.bind(this));
    socket.on('get-tasker-list' , this.taskerList.bind(this));

    socket.on('get-root-dir' ,function(){
      fs.readdir(process.cwd() ,function(err ,dirlist){
        if(err){
          socket.emit('fs-error' , err.toString());
          Sockets.logger.broadcast.emit('fail' ,{event:'get-root-dir ERROR' ,value:err.toString()});
        }else{
          socket.emit('got-dirlist' ,{list:dirlist ,cwd:process.cwd() ,root:path.resolve('./')});
          Sockets.logger.broadcast.emit('log' ,{event:'get-root-dir SUCCESS' ,value:dirlist});
        }
    });

      });

        socket.on('new-dir' ,function(dirObj){

          fs.readdir(dirObj.cwd ,function(err ,dirlist){
            if(err){
              socket.emit('fs-error' , err.toString());
              Sockets.logger.broadcast.emit('fail' ,{event:'new-dir ERROR' ,value:err.toString()});
            }else{
              if(~dirlist.indexOf(dirObj.value)){
                socket.emit('fs-error' , `cant create directory. '${dirObj.value}' already exists`);
                Sockets.logger.broadcast.emit('log' ,
                {event:`cant create directory. '${dirObj.value}' already exists` ,value:dirlist , dir:dirObj});

                return
              }
              mkdirp(`${dirObj.cwd}\\${dirObj.value}` ,function(err1){
                if(err1){
                  socket.emit('fs-error' , err1.toString());
                  Sockets.logger.broadcast.emit('fail' ,{event:'new-dir ERROR' ,value:err1.toString()});
                  return
                }
                Sockets.logger.broadcast.emit('log' ,
                {event:`made new directory ~/${dirObj.value}` ,value:`${dirObj.cwd}\\${dirObj.value}`});

                self.changeDirectory(dirObj.cwd);
              })
              //socket.emit('got-dirlist' ,{list:dirlist ,cwd:nextDir});
            }
          });

        });
        socket.on('change-dir' ,this.changeDirectory.bind(this))

        socket.on('delete-dir' ,function(removeDir){

          fs.remove(removeDir.path, function (err) {
            if (err){
              socket.emit('fs-error' , err.toString());
              Sockets.logger.broadcast.emit('fail' ,{event:'delete-dir ERROR' ,value:err.toString()});
              return
            }
            fs.readdir(removeDir.cwd ,function(err2 ,dirlist){
              if(err2){
                socket.emit('fs-error' , err2.toString());
                Sockets.logger.broadcast.emit('fail' ,{event:'delete-dir ERROR' ,value:err2.toString()});
              }else{
                socket.emit('got-dirlist' ,{list:dirlist ,cwd:removeDir.cwd});
                Sockets.logger.broadcast.emit('log' ,{event:'delete-dir SUCCESS' ,value:dirlist});
              }
            });

          });
        });

        socket.on('dir-add-file' ,function(fileObj){

          fs.outputFile(`${fileObj.path}/${fileObj.name}.${fileObj.ext}`, fileObj.value, function (err) {
            if(err){
              socket.emit('fs-error' , err.toString());
              Sockets.logger.broadcast.emit('fail' ,{event:'dir-add-file ERROR' ,value:err.toString()});
              return;
            }
            Sockets.logger.broadcast.emit('log' ,{event:'dir-add-file SUCCESS' ,value:fileObj});

            fs.readdir(fileObj.path ,function(err2 ,dirlist){
              if(err2){
                socket.emit('fs-error' , err2.toString());
                Sockets.logger.broadcast.emit('fail' ,{event:'dir-add-file ERROR' ,value:err2.toString()});
              }else{
                socket.emit('got-dirlist' ,{list:dirlist ,cwd:fileObj.path});
                Sockets.logger.broadcast.emit('log' ,{event:'dir-add-file SUCCESS' ,value:dirlist});
              }
            });

          });
        });

      socket.on('get-scripts' ,this.scriptList.bind(this));

      socket.on('get-audio-list',this.getAudio.bind(this))
  }
  changeDirectory(nextDir){
    let {socket , Sockets} = this;
    if(fs.lstatSync(nextDir).isDirectory()){

    fs.readdir(nextDir ,function(err ,dirlist){
      if(err){
        Sockets.logger.broadcast.emit('fail' ,{event:'change-dir ERROR' ,value:err.toString()});
      }else{
        socket.emit('got-dirlist' ,{list:dirlist ,cwd:nextDir});
        Sockets.logger.broadcast.emit('log' ,{event:'change-dir SUCCESS' ,value:dirlist});
      }
    });
  }
  }
  scriptList(){
    let {socket , Sockets , scriptsPath} = this;

    fs.readdir(scriptsPath , function(err ,dirlist){
      if(err){
        Sockets.logger.broadcast.emit('fail' ,{event:'get-scripts Error' ,value:err.toString()});
      }else{
        socket.emit('got-scripts' ,dirlist);
        Sockets.logger.broadcast.emit('log' ,{event:'get-scripts SUCCESS' ,value:dirlist});
      }
    });

  }

  saveAudio(audioStream){
    let {socket , Sockets , audioPath , self} = this;
    let count = 0;

    audioStream.forEach(function(file ,index ,arr){

      fs.writeFile(`${audioPath}/${file.name}.mp3` ,file.data ,'binary' ,function(err ,res){
        count += 1;
          if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'save-audio error' ,value:err.toString()});
        }else{
          Sockets.logger.broadcast.emit('log' ,{event:'save-audio success' ,value:file.name ,data:file.data.length});




          socket.emit('audio-status' ,{currentFile:file.name ,filesLeft:arr.length -count })
        }
        if(count === arr.length){
          self.getAudio()
        }
      });

    });

  }
  getAudio(){
    let {socket , Sockets , audioPath} = this;
    fs.readdir(this.audioPath ,function(err ,dirlist){
      if(err){
        Sockets.logger.broadcast.emit('fail' ,{event:'get-audio-list error' ,value:err.toString()});
      }else{
        Sockets.logger.broadcast.emit('log' ,{event:'get-audio-list success' ,value:dirlist});
        let done2 = dirlist.filter(e => e.match(/\.mp3$/i));
        socket.emit('audio-list' ,{file:done2 , dir:this.audioPath})
      }
    });
  }
  deleteAudio(name){
    let {socket ,Sockets ,audioPath ,self}  = this;
    fs.unlink(`${audioPath}\\${name}` ,function(err){
        if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'error deleteing audio file' ,value:err.toString() , name});
        }else{
          self.getAudio()
          Sockets.logger.broadcast.emit('log' ,{event:'deleted audio file' ,value:name});
        }
    })
  }
  saveScript(file){
    let {socket ,Sockets , scriptsPath ,self} = this;

    fs.writeFile(`${scriptsPath}\\${file.name}.${file.type}` ,file.value ,'utf8' ,function(err ,res){
        if(err){
        Sockets.logger.broadcast.emit('log' ,{event:'save-script error' ,value:err.toString()});
      }else{
        Sockets.logger.broadcast.emit('log' ,{event:'save-script success' ,value:res});
        self.scriptList();
      }
    });
  }
  windowList(){
    let {socket ,Sockets , windowsPath} = this;
    fs.readdir(windowsPath ,function(err ,dirlist){
      if(err){
        Sockets.logger.broadcast.emit('fail' ,{event:'list package ERROR' ,value:err.toString()});
      }else{
        let isPackages;

            isPackages = dirlist.map(function(filepath){
            if(fs.lstatSync(`${windowsPath}\\${filepath}`).isDirectory() ){
              let data ='';
              try{
                if(fs.existsSync(`${windowsPath}/${filepath}/package.json`)){
                  data = fs.readFileSync(`${windowsPath}/${filepath}/package.json`)
                }
                Sockets.logger.broadcast.emit('log' ,{event:'list package data' ,value:data.length});
                  return data.toString();
              }catch(err2){
                return false
                Sockets.logger.broadcast.emit('fail' ,{event:'list package ERROR' ,value:err2.toString()});
              }


            }

          });
          isPackages = isPackages.filter(function(e){
            return e && e.length
          });
          socket.emit('window-list' ,isPackages);
        Sockets.logger.broadcast.emit('log' ,{event:'list package success' ,value:isPackages.length});
      }
    });
  }
  taskerList(){
    let {socket ,Sockets , taskPath ,self} = this;
    fs.readdir(taskPath ,function(err ,dirlist){
      if(err){
        Sockets.logger.broadcast.emit('fatal',{event:`getting tasks list` ,value:err.toString()});
        return
      }
      socket.emit('tasker-list' ,dirlist);
    });
  }

  saveWindow(config){
    let {socket ,Sockets , windowsPath ,self} = this;
    let complete = Object.assign(baseWindowConfig , config);

    let file = customTemplate(config.deps , config.userScripts , config.innerHTML);

    fs.readdir(`${windowsPath}\\${complete.id}` ,function(err ,dirlist){
        if(!err){
          console.log('err' ,err)
          Sockets.logger.broadcast.emit('log',{event:`'${complete.id}' already exist in ${windowsPath}` ,value:err.toString()});
          return
        }
          mkdirp.sync(`${windowsPath}\\${complete.id}`);
          console.log("error" ,complete.id);
          //if exists

             //write the files
            fs.writeFile(`${windowsPath}\\${complete.id}\\index.html` ,file , function(err){
                if(err){
                  Sockets.logger.broadcast.emit('fail',{event:`error saving index.html` ,error:err.toString()});
                  return
                }
                self.windowList();
          Sockets.logger.broadcast.emit('log',{event:`wrote index.html` ,value:file});

        });

        fs.writeFile(`${windowsPath}\\${complete.id}\\package.json` , JSON.stringify(complete,null,2) ,function(err){
      if(err){
        Sockets.logger.broadcast.emit('fail',{event:`error saving package.json` ,error:err.toString()})
        return
      }
      Sockets.logger.broadcast.emit('log',{event:`wrote package.json succsess` ,value:complete})
    });



    });



  }
}
