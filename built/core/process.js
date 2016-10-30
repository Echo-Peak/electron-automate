let ps = require('ps-node');
let WMI = require('node-wmi');
let events = require('events');
let config = require('../config');
let child_process = require('child_process');
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
let path = require('path');

let flags = {
  dev:!!~process.argv.indexOf('--dev'),
  express:!!~process.argv.indexOf('--express'),
  logging:!!~process.argv.indexOf('--logging'),
  electron:!!~process.argv.indexOf('--electron')
}


class EventEmitter extends events{}
const emitter = new EventEmitter();
function kill(list ,pid){
  let newList = list;
  if(pid){
    newList = newList.filter(e => e.ProcessId !== pid);
  }
let status = 0;
  return new Promise(function(resolve ,reject){

      let killAsync = function(command){
        newList.forEach(e => {
          child_process.exec(command.replace('{}',e.pid) ,function(){

            status += 1;
            if(status === newList.length){
              resolve();
            }
          });

        });
      }
      switch(process.platform){
    case 'win32':{

      newList && newList.length && killAsync('taskkill /pid {} /f');
      (!newList || !newList.length) && resolve();
    };break;
    case 'darwin':{};break;
    case 'linux':{};break;
  }
  })
}

/*  querys task list to find a process/list of process
  @param1 {string} bin - binary for wmic.
  @param2 {string} flagID -  command line argmuent unique to a script command line o prevent terminate unwanted processes
  @param3 {function} callback - asynchronous callback
*/
function exists(bin ,flagID, callback){

  switch(process.platform){
    case 'win32':{
      WMI.Query().class('Win32_Process').properties(['caption','commandline' ,'ProcessId'])
      .where(`name='${bin}.exe'`).exec(function(err, list) {

        if(list){
          let found = list.filter(e => e.CommandLine.includes(flagID) || e.ProcessId.includes(flagID));
          if(found.length){
            callback(true ,found)
          }else{
            callback(false);
          }
      }else{
        callback(false);
      }

      });

    }
  }

}


//module to handle terminating & exec sub processes
class Process_Handler{
  static emitter(){
    return emitter
  }
  static check(bin , flagID ,callback){
    if(arguments.length){
      exists({name:bin ,flagID} ,function(bool , list){

          //system-handler.js will handle this calllback
          typeof callback === 'function' && callback(bool, list);

      });
    }
      if(flags.electron && !flags.dev){
        //used when application is packaged.
        exists({name:config.name ,flagID:'--electron'} ,function(bool , list){
          bool  && kill(list);
        });
      }
  }
  static _kill(list ,pid){


    return kill(list ,pid);
  }
  constructor(System , Logger){
    this.nodePath = path.resolve(__dirname ,`../exec/node/${config.alias.nodejs.name}.exe`);
    this.robotPath = path.resolve(__dirname ,'robot.js');
    this.system = System;
    this.logger = Logger;
    this.spawn = this.spawn;
    this.std = this.std.bind(this);
    System.on('system-restart-robot' ,this.restartRobot.bind(this));
    System.on('system-kill-robot' ,this.killRobot.bind(this));


    System.on('system-restart' ,this.restart.bind(this));
    System.on('system-terminate' ,this.terminate.bind(this));

    emitter.on('restart-robot' ,this.restartRobot.bind(this)); // dynamic routes.js
    emitter.on('kill-robot' ,this.killRobot.bind(this)); // dynamic routes.js
  }
  killRobot(){
    exists({name:config.alias.nodejs.name ,flagID:'--robot'} ,(bool , list)=>{
      if(bool){
        kill(list);
        System.emit('system-send-to-logger' ,'log', {event:'KILLED',value:''});
      }

    });
  }
  terminate(){
    //TODO: requires seperate instance of node.js/alias. not electron
  }
  restart(){
    //TODO: requires seperate instance of node.js/alias. not electron
  }
  restartRobot(){

    let System = this.system;
    let exec = `"${this.nodePath}" "${this.robotPath}" ${config.ports.main} ${IP} ${config.alias.nodejs.name} --robot`;
    exists({name:config.alias.nodejs.name ,flagID:'--robot'} ,(bool , list)=>{
      if(bool){
        kill(list);
        System.emit('system-send-to-logger' ,'log', {event:'KILLED',value:''});
        child_process.exec(exec ,this.std);
      }else{
        child_process.exec(exec ,this.std);
      }

    });

  }
  spawn(bin, scriptName, method){
    let self = this;
    if(arguments.length < 3){
      throw new Error('expected 3 arguments');
    }

    let cwd = path.resolve(__dirname);
    exists({name:bin ,flagID:config.flags.systemHandler} ,(bool , list)=>{

      if(bool){

        !flags.dev && kill(list).then(function(){
          child_process[method](`node ${scriptName}.js ${config.flags.systemHandler} ${process.argv.splice(1).join(' ')}`, {cwd} ,self.std);
        });

      }else{

        child_process[method](`node ${scriptName}.js ${config.flags.systemHandler} ${process.argv.splice(1).join(' ')}` ,{cwd},self.std);
      }

    });


  }
  std(stderr , stdout){

    if(stderr){
      this.logger.emit('fatal', {event:'std-err' ,value:stderr.toString()});
      console.log(stderr.toString());
    }else{
      this.logger.emit('log', {event:'std-out' ,value:stdout.toString()});
      console.log(stdout.toString());
    }
  }
}

let cached;
let watchers = [];
module.exports = {
  check:Process_Handler.check,
  emitter,
  kill:Process_Handler._kill,
  emit: (event , args) => emitter.emit(event ,args),
  init(System , Logger){
    if(cached){
      return cached
    }else{
      cached = new Process_Handler(System ,Logger);
      watchers.map(fn => fn(cached));
      return cached
    }
  }
}
