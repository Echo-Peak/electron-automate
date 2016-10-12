require('./core/process')();
let express = require('express');
let path = require('path');
let config = require('./config');
let http = require('http');
let socketIO = require('socket.io');
let socketIOClient = require('socket.io-client');
const JsonDB = require('node-json-db');
var cookieParser = require('cookie-parser');
let ps = require('ps-node');
let logger = require('morgan');
const os = require('os');
let child_process = require('child_process');
let fs = require('fs');
let browserWindowConfig = require('./core/browser-window');
//let nodePath = path.resolve(__dirname ,'exec/n');
// try{
//
//   let dirlist = fs.readdirSync(nodePath);
//   let getExec = dirlist.filter(e => /\.exe$/.test(e));
//
//   if(!~dirlist.indexOf(config.alias.nodejs.name)){
//     fs.renameSync(`${nodePath}\\${getExec}` ,`${nodePath}\\${config.alias.nodejs.name}.exe` );
//   }
// }catch(err){
//   console.log(err)
// }

let dynamicWindow = `file:///${__dirname}/data/gen/dynamic-window.html`;
let connectionType = require('./core/connection-types');
let app = require('./core/server')(config , config.ports.main);


let History = require('./core/history')(app);


const electron = require('electron');


let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
const electronApp = electron.app;

let System = socketIOClient.connect(`http://localhost:${config.ports.main}/system` ,{reconnect:true});
let Dynamic = socketIOClient.connect(`http://localhost:${config.ports.main}/dynamic` ,{reconnect:true});
System.emit('who' ,{pid:process.pid , name:'electron-app' ,id:'electron'});

console.log('running')
app.use(cookieParser());
~process.argv.indexOf('--dev') && app.use(logger('dev'));

app.use(express.static(__dirname+'/static'));
app.set('views', __dirname+ '/views');
app.set('view engine', 'jade');




app.get('/home' ,function(req , res){
let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
let allowedRoles = Object.keys(config.security.roles);
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

~process.argv.indexOf('--electron') && killDupes();

~process.argv.indexOf('--electron') && electronApp.on('ready' ,function(){
  //use one instance of BrowserWindow & keep it running to handle audio/video /pics ect...
  let BrowserWindow_delagate =  new electron.BrowserWindow({show:false})
  .loadURL(dynamicWindow);

  BrowserWindow_delagate.on('close' ,function(){
    BrowserWindow_delagate.hide();
    Dynamic.emit('browser-window-closed');
  });
  Dynamic.on('update-browser-window' ,browserWindowConfig.bind(this,BrowserWindow_delagate)); //this configures BrowserWindow_delagate

if(~process.argv.indexOf('--dev')){
      let win = new electron.BrowserWindow({width:1900,height:950 ,show:true});
    win.loadURL(`http://localhost:${config.ports.main}/home`);
    win.on('closed' ,function(){
      System.emit('quit');
    })
}




});
~process.argv.indexOf('--electron') && electronApp.on('window-all-closed', function (e) {
  ~process.argv.indexOf('--dev') && electronApp.quit();
});
~process.argv.indexOf('--electron') && electronApp.on('will-quit',function(e){
  ~process.argv.indexOf('--dev') && electronApp.quit()
});

app.use(function(req, res, done){


  let badRoute = History.find(req.path);
  let o = History.get();
  if(badRoute){
      res.status(404).render('error' ,{route:req.path});
  }else{
    // if(req.path === '/home'){
    //     done()
    // }else if(o.length < 1){
    //   res.status(404).render('error' ,{route:req.path});
    // }
    done()
  }

});
