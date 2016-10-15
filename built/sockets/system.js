let child_process = require('child_process');
let path = require('path');
let fs = require('fs-extra');
let ps = require('ps-node');
let history = require('../core/history');

let isDev = !!~process.argv.indexOf('--dev');

        let netstat = function(input) {
            var k = input.split(/\n/);
            k.splice(0, 4);
            k = k.map(e => e.trim()).map(function(f) {
                let b = f.split(/\s{2}/).filter(m => m.length);

                //console.log(b);
                return {
                    state: b[3],
                    local: b[1],
                    protocal: b[0],
                    ext: b[2]
                }
            });
            return k
        }

module.exports = class socket_system {
    constructor(socket, db, Sockets ,app) {

        let History = history(app);
        this.socket = socket;
        this.Sockets = Sockets;
        this.scriptsPath = path.resolve(__dirname ,'../data/scripts');
        this.packagePath = path.resolve(__dirname ,'../package.json'); // package.json for application
        this.npmPath = path.resolve(__dirname ,'../exec/node/npm.cmd');
        this.nodeModulesPath = path.resolve(__dirname ,'../');
        this.self = this;
        socket.on('who' , function(who){
          // ps.lookup({pid:who.pid} , function(err ,list){
          //   console.log(list , who)
          // });
          console.log(`${who.name} - PID: ${who.pid} connected`);
          socket.emit('who' , who);
          socket.broadcast.emit('who' , who);
        });
        socket.on('error' ,function(err){
          Sockets.logger.broadcast.emit('fatal' ,err.toString())
        });
        socket.on('exec-script' ,this.execScript.bind(this));

        socket.on('get-services' ,this.getServices.bind(this));
        socket.on('get-processes' , this.getProcesses.bind(this));
        socket.on('taskkill' ,this.killProcess.bind(this));
        socket.on('get-history' ,()=>{
          socket.emit('update-history' , History.get());
          socket.broadcast.emit('update-history' , History.get());
        });
        socket.on('restart' , function(){
          isDev && socket.emit('restart');
          isDev && socket.broadcast.emit('restart');
        });

        socket.on('get-packageJSON' ,this.getPackageJSON.bind(this))
        socket.on('npm-install' ,this.npmInstall.bind(this));
        socket.on('npm-uninstall' ,this.npmUninstall.bind(this));


        socket.on('reload', () => {

            isDev && socket.emit('reload');
            isDev && socket.broadcast.emit('reload');
        });
        socket.on('quit', () => {
            socket.emit('quit');
            socket.broadcast.emit('quit');
        });
        socket.on('who', (who) => {
            socket.emit('who', who);
            socket.broadcast.emit('who', who);
        });
        socket.on('destroy-route' ,function(id){
          Sockets.logger.broadcast.emit('log' ,{event:'destorying route' ,value:id});
          Sockets.emit('destroy-route' ,id);
        });
        socket.on('robot-pid', function(pid) {
            socket.emit('robot-pid', pid);
            socket.broadcast.emit('robot-pid', pid);
            Sockets.emit('robot-pid', pid);
            Sockets.logger.broadcast.emit('log' ,{event:'robot pid' ,value:pid});
        });
        socket.on('robot-screen', function(screen) {
            socket.emit('robot-screen', screen);
            socket.broadcast.emit('robot-screen', screen);
            Sockets.emit('robot-screen', screen);
            Sockets.logger.broadcast.emit('log' ,{event:'robot-screen' ,value:screen});
        });

        socket.on('get-netstat' ,function(){
          child_process.exec('netstat' ,function(stderr ,stdout){
            if(stderr){
              Sockets.logger.broadcast.emit('fail' ,{event:'netstat error' ,value:stderr.toString()});
              Sockets.logger.emit('fail' ,{event:'netstat error' ,value:stderr.toString()});
            }else{
              socket.emit('got-netstat' ,netstat(stdout));
              Sockets.logger.broadcast.emit('log' ,{event:'netstat success' ,value:stdout.toString()});
              Sockets.logger.emit('log' ,{event:'netstat success' ,value:stdout.toString()});
            }
          })
        });

        socket.on('shell-input' ,function(cmd){
          child_process.exec(cmd ,function(stderr ,stdout){
            if(stderr){
              socket.emit('shell-output',stderr.toString());
              Sockets.logger.broadcast.emit('fail' ,{event:'SHELL error' ,value:stderr.toString(), cmd});
            }else{
              socket.emit('shell-output',stdout.toString() || 'Executed: '+cmd);

              Sockets.logger.broadcast.emit('log' ,{event:'SHELL success' ,value:stdout.toString() ,cmd});
            }
          })
        });


    }
    npmUninstall(_package){
      let {socket , Sockets , npmPath ,nodeModulesPath ,packagePath ,self} = this;
      console.log('uninstalling' ,_package);

      let npm = child_process.exec(`"${npmPath}" uninstall ${_package} --prefix "${nodeModulesPath}"` ,function(stderr ,stdout){
        if(stderr){
          socket.emit('npm-status',{err:true , value:data});
          Sockets.logger.broadcast.emit('log' ,{event:'npm error' ,value:data.toString()});
          console.log(data);
        }else{
          socket.emit('npm-status',{err:false , value:data});
          Sockets.logger.broadcast.emit('log' ,{event:'npm log' ,value:data.toString()});
          console.log(data)
          self.getPackageJSON();
        }
      });

      let packageJSON = fs.readFileSync(packagePath).toString();
      packageJSON = JSON.parse(packageJSON);
      delete packageJSON.dependencies[_package];
      //console.log(packageJSON.dependencies);

      fs.writeFile(packagePath ,JSON.stringify(packageJSON) ,function(err){
        if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'failed to uninstall package' ,value:err.toString() , package:_package});
        }
      });


    }
    npmInstall(_package){
      let {socket , Sockets , npmPath ,nodeModulesPath ,packagePath ,self} = this;
      console.log("installing" ,_package);
      let packageJSON = fs.readFileSync(packagePath).toString();
      packageJSON = JSON.parse(packageJSON);
      packageJSON.dependencies[_package.package] = '*';
      //console.log(packageJSON.dependencies);

      fs.writeFileSync(packagePath ,JSON.stringify(packageJSON));
      Sockets.logger.broadcast.emit('log' ,{event:'installing npm module' ,value:_package})

      let npm = child_process.exec(`"${npmPath}" i ${_package.package} --prefix "${nodeModulesPath}"`,function(stderr ,stdout){
        if(stderr){
          socket.emit('npm-status',{err:true , value:data});
          console.log(data);
          self.getPackageJSON();
        }else{
          socket.emit('npm-status',{err:false , value:data});
          console.log(data)
          self.getPackageJSON()
        }

      });

    }
    getPackageJSON(){
      let {socket , Sockets , packagePath} = this;
      fs.readFile(packagePath ,function(err ,res){
        if(err){
          Sockets.logger.broadcast.emit('fail' ,{event:'failed to read package.json' ,value:err.toString()});
          return
        }
        Sockets.logger.broadcast.emit('log' ,{event:'read package.json success' ,value:res.toString()});
        socket.emit('packageJSON' ,res.toString());
      });
    }
    killProcess(name){
      let {socket , Sockets ,self} = this;
      child_process.exec(`taskkill /im ${name} /f` ,function(stderr ,stdout){
        if(stderr){

          Sockets.logger.broadcast.emit('log' ,{event:'taskkill error' ,value:stderr.toString()});
        }else{
          self.getProcesses();
          Sockets.logger.broadcast.emit('log' ,{event:'taskkill success' ,value:stdout.toString()});
        }


      })
    }
    getProcesses(){
      let {socket , Sockets} = this;
      let filterProcesses = function(input){
      var k = input.substr(250 ,input.length).split(/\n/).map(e => e.trim())
    .map(function(item){
      let segs = item.split(/\s{2}/g).filter( ss => ss.length)
      try{
          let o = segs[1].split(' ').filter(kk => kk.length);

      return{
        name:segs[0],
        pid:o[0],
        user:o[1],
        memory:segs[3]
      }
      }catch(e){
        return false
      }
    });
      k.splice(0,1);
      return k
    }

    child_process.exec('tasklist' ,function(stderr ,stdout){
      if(stderr){
        socket.emit('got-processes',stderr.toString());
        Sockets.logger.broadcast.emit('log' ,{event:'got-processes error' ,value:stderr.toString()});
      }else{
        let done = filterProcesses(stdout);
        socket.emit('got-processes',done);
        Sockets.logger.broadcast.emit('log' ,{event:'got-processes success' ,value:stdout.toString()});
      }


    });

    }
    getServices(){
      let {socket , Sockets} = this;
      let filterServices = function(input){
        var k = input.split(/\n/).map(function(item){
        let name = item.match(/^([a-z0-9\-\!\._]+\s?)*/ig);
        let striped = item.replace(name[0] ,'').trim();
        striped = striped.match(/^([a-z0-9\-\!\.\\]+\s?)*/ig);
        return {
        name:name[0],
        user:striped[0]
        }
        });
        k.splice(0,1);
        return k
      }

      child_process.exec('wmic service where started=true get  name, startname' ,function(stderr ,stdout){
        if(stderr){
          socket.emit('got-services',stderr.toString());
          Sockets.logger.broadcast.emit('log' ,{event:'got-services error' ,value:stderr.toString()});
        }else{
          let done = filterServices(stdout);
          socket.emit('got-services',done);
          Sockets.logger.broadcast.emit('log' ,{event:'got-services success' ,value:stdout.toString()});
        }


      });
    }
    execScript(file){
      let {socket ,Sockets , scriptsPath} = this;

      child_process.exec(`"${scriptsPath}\\${file}"`,function(stderr ,stdout){
        if(stderr){
          socket.emit('shell-output',stderr.toString());
          Sockets.logger.broadcast.emit('fail' ,{event:'SHELL error' ,value:stderr.toString()});

        }else{
          socket.emit('shell-output',stdout.toString() || 'Executed: '+file);
          Sockets.logger.broadcast.emit('log' ,{event:'SHELL success' ,value:stdout.toString()});

        }
      })
    }
}
