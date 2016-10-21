let ps = require('ps-node');
let WMI = require('node-wmi');

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
function kill(list){
  switch(process.platform){
    case 'win32':{

      list.forEach(e => child_process.exec(`taskkill /pid ${e.ProcessId} /f`));
    };break;
    case 'darwin':{};break;
    case 'linux':{};break;
  }
}
function exists(query , callback){

  switch(process.platform){
    case 'win32':{
      WMI.Query().class('Win32_Process').properties(['caption','commandline' ,'ProcessId'])
      .where(`name='${query.name}.exe'`).exec(function(err, list) {
        if(list){
          let found = list.filter(e => e.CommandLine.includes(query.flagID));
          list ? callback(true ,found) : callback(false);
      }else{
        callback(false);
      }

      });

    }
  }

}


//module to handle terminating & exec sub processes
class Process_Handler{
  static check(){
      if(flags.electron && !flags.dev){
        //used when application is packaged.
        exists({name:config.name ,flagID:'--electron'} ,function(bool , list){
          bool  && kill(list);
        });
      }
  }
  constructor(System , Logger){
    this.nodePath = path.resolve(__dirname ,`../exec/node/${config.alias.nodejs.name}.exe`);
    this.robotPath = path.resolve(__dirname ,'robot.js');
    this.system = System;
    this.std = this.std.bind(this);
    System.on('system-restart-robot' ,this.restartRobot.bind(this));
    System.on('system-kill-robot' ,this.killRobot.bind(this));


    System.on('system-restart' ,this.restart.bind(this));
    System.on('system-terminate' ,this.terminate.bind(this));
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
    //cluster
  }
  restart(){
    //cluster
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
  std(stderr , stdout){

    if(stderr){
      this.system.emit('system-send-to-logger' ,'fatal', {event:'std-err' ,value:stderr.toString()});

    }else{
      this.system.emit('system-send-to-logger' ,'log', {event:'std-out' ,value:stdout.toString()});
    }
  }
}

let cached;
module.exports = {
  check:Process_Handler.check,
  init(System , Logger){
    if(cached){
      return cached
    }else{
      cached = new Process_Handler(System ,Logger);
    }
  }
}
