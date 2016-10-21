let path = require('path');
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
let config = require('../config');
let History = require('./history');

let child_process = require('child_process');

module.exports = class DynamicRoute{
  constructor(app, Sockets ,socketIO){
    this.app = app;
    this.system = Sockets.ystem;
    this.Sockets = Sockets;
    this.openRoutes = [];
    this.history = History(app);
    this.createID = this.createID;
    this.socketIO = socketIO;
    this.nodePath = path.resolve(__dirname ,`../exec/node/${config.alias.nodejs.name}.exe`);
    this.robotPath = path.resolve(__dirname ,'robot.js');
  }
  createID(){
    let alpha = 'abcdefghijkmnopqrstuvwx';
    alpha += alpha.toUpperCase();
    let id = '';
    console.log(IP);
    for(var i =0; i < (config.routeLength || 6); i++){
      id += alpha[Math.floor(Math.random()*alpha.length)];
    }
    return id
  }
  create(ip, role){
    let id = this.createID()
    this.openRoutes.push({id, ip , role ,visit:false});

    let view = path.resolve(__dirname ,`../views/${role}`);
    let viewConfig = {
      ip_address:IP,
      role:role,
      port:config.ports.main,
      route_id:id
    }

    this.history.add({ip ,user:role , date:new Date() ,id});
    this.app.get(`/${id}` ,(req ,res)=>{
      this.openRoutes.map( e => e.id === id && (e.visit = true));

      this.Sockets.system.emit('update-history' , this.history.get());
      this.Sockets.system.broadcast.emit('update-history' , this.history.get());

      //TODO: seperate into another sub process handleing module
      let robot = `"${this.nodePath}" "${this.robotPath}" ${config.ports.main} ${IP} ${config.alias.nodejs.name} --robot`;

      child_process.exec(robot ,(stderr ,stdout)=>{
        if(stderr){
          this.Sockets.logger.broadcast.emit('fail' ,{event:`error closing ${config.alias.nodejs.name} shell `, value:stderr.toString()});
        }else{
          this.Sockets.logger.broadcast.emit('log' ,{event:`Closed ${config.alias.nodejs.name} shell Successfully`, value:stdout.toString()});
        }
      });
      res.render(view ,viewConfig)
    });
    this.delayDestroy(id);
    return {ip ,id , role}
  }
  delayDestroy(id){

    setTimeout(()=>{

      this.openRoutes.map((e)=>{
        if(!e.visit){
          this.destroy(e.id ,this.history.get() );
        }
      });

    },6e4);
  }
  destroy(id){

    let self = this;
    let routerStack = this.app._router.stack;
    routerStack.forEach(function(route ,index){

      if(route.route && route.route.path === `/${id}`){
        routerStack.splice(index ,1);
        self.openRoutes = self.openRoutes.filter(e => e.id !== id);
        self.history.remove(id);

        self.Sockets.system.emit('update-history' , self.history.get());
        self.Sockets.system.broadcast.emit('update-history' , self.history.get());

        if(self.openRoutes.length < 1){
          self.openRoutes = [];

          self.Sockets.emit('kill-robot');
        }
      }

    });

    if(this.openRoutes.length < 1){
      this.openRoutes = [];
      this.Sockets.emit('kill-robot');
    }

  }
}
