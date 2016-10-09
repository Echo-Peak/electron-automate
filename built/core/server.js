let express = require('express');
let path = require('path');
let config = require('../config');
let http = require('http');
let socketIO = require('socket.io');
let events = require('events');
let dynamicRoute = require('./dynamic-route');
let History = require('./history');
let child_process = require('child_process');

let app = express();
let server = http.Server(app);
let io = socketIO(server);
let ps = require('ps-node');



class Sockets extends events{
  constructor(){
    super();
    let self = this;
    this.history = new History(app);
    this.dRoutes = new dynamicRoute(app , this ,io);


    this.on('spawn-app' ,(userObj)=>{
      let  route = this.dRoutes.create(userObj.who.ip ,userObj.role ,this.history)

      this.system.emit('spawned-app',route)
      this.system.broadcast.emit('spawned-app',route);
      self.logger.broadcast.emit('log' ,{event:'spawning app' ,value:route})
      console.log('spawning-app' ,userObj);
    });

    this.on('robot-screen' ,(screen)=>{
      console.log('robot-screen' ,screen)
      this.screen = screen;
    });
    this.on('robot-pid' ,(pid)=>{
      this.robotPID = pid;
      console.log('robot-pid' ,pid)
    });
    this.on('destroy-route' ,(id)=>{
      console.log('DESTROYING ',id)
      this.dRoutes.destroy(id ,this.history);
    });
    this.on('kill-robot' ,()=>{
      ps.lookup({command:config.alias.nodejs ,arguments:'--robot'}, function(err ,results){
        results.length && results.forEach(function(robotInstance){
          try{
            child_process.execSync(`taskkill /pid ${robotInstance.pid} /f`);
            self.logger.broadcast.emit('log' ,{event:'killing robot' ,value:self.robotPID ,robotInstance:robotInstance.pid })
          }catch(err){
            self.logger.broadcast.emit('fail' ,{event:'killing robot' ,value:self.robotPID ,error:err.toString()})
          }
        })
      })
    });
  }
  getSockets(){
    return this
  }
}

module.exports = function(userDB ,port){
let ServerSockets = new Sockets();
server.listen(port);


let socketNameSpaces = ['system' ,'electron' ,'robot','logger' ,'crypto' ,'file-system' ,'chat'];
socketNameSpaces.forEach(function(namespace){
  io.of('/'+namespace).on('connection', (socket)=>{
    ServerSockets[namespace] = socket;
    ServerSockets[`socket_${namespace}`] = require(`../sockets/${namespace}`);
    ServerSockets[`socket_${namespace}`] = new ServerSockets[`socket_${namespace}`](socket , userDB ,ServerSockets ,app);
  });
});


return app
}
