let Process_Handler = require('./core/process');
Process_Handler.check();

let express = require('express');
let path = require('path');
let config = require('./config');
let http = require('http');
let socketIO = require('socket.io');
let socketIOClient = require('socket.io-client');
let electronApp = require('./core/electron');
var cookieParser = require('cookie-parser');
let ps = require('ps-node');
let logger = require('morgan');
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
let child_process = require('child_process');
let fs = require('fs');
let connectionType = require('./core/connection-types');
let app = require('./core/server')(config , config.ports.main);
let History = require('./core/history')(app);

let flags = {
  electron:!!~process.argv.indexOf('--electron'),
  dev:!!~process.argv.indexOf('--dev'),
  electron_only:!!~process.argv.indexOf('--electron-only'),
  logging:!!~process.argv.indexOf('--logging'),
  express_only:!!~process.argv.indexOf('--express-only'),
  production:!!~process.argv.indexOf('--production')
}

let System = socketIOClient.connect(`http://localhost:${config.ports.main}/system` ,{reconnect:true});
let Dynamic = socketIOClient.connect(`http://localhost:${config.ports.main}/dynamic` ,{reconnect:true});
let Logger = socketIOClient.connect(`http://localhost:${config.ports.main}/logger` ,{reconnect:true});

Process_Handler.init(System,  Logger);

System.emit('who' ,{pid:process.pid , name:'express-app' ,id:'express'});

function expressApp(){
  flags.logging && app.use(logger('dev'));

  app.use(express.static(__dirname+'/static'));
  app.set('views', __dirname+ '/views');
  app.set('view engine', 'jade');

  app.get('/favicon.ico' ,function(req ,res){
    res.send(200);
  });

  app.get('/home' ,function(req , res){
  let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  let allowedRoles = Object.keys(config.security.roles);
  console.log(ip ,connectionType(ip) )
  if(connectionType(ip)){
        res.render('home' ,{
      port:config.ports.main,
      internal_address:ip,
      ip_adress:IP,
      roles:allowedRoles
      });
    }else{
      res.status(404).render('error' ,{route:req.path});
    }
  });
  app.get('/' ,function(req ,res){
    res.redirect('/home')
  });

  app.use(function(req, res, done){


    let badRoute = History.find(req.path);
    if(badRoute){
        res.status(404).render('error' ,{route:req.path});
    }else{
      done()
    }

  });
}

//to only use electron without spawning another instance of express used in development

flags.electron_only ? electronApp(app , Dynamic , System) : expressApp();
flags.express_only && expressApp();
flags.dev && !expressApp();
flags.production && !expressApp() && !electronApp(app , Dynamic , System);

!flags.logging && console.log('logging is disabled!');
