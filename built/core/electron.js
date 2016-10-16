const electron = require('electron');
const app = electron.app;
let path = require('path');
let browserWindowConfig = require('./browser-window');
let socketIOClient = require('socket.io-client');
let dynamicWindow = path.resolve(__dirname,`../data/gen/dynamic-window.html`);
dynamicWindow = `file:///${dynamicWindow}`;
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;

let config = require('../config');

let flags = {
  electron:!!~process.argv.indexOf('--electron'),
  dev:!!~process.argv.indexOf('--dev'),
  production:!!~process.argv.indexOf('--dev')
}

//~process.argv.indexOf('--electron') && killDupes();




function init(express ,Dynamic ,System , Logger){

if(flags.dev){
  Dynamic = socketIOClient.connect(`http://localhost:${config.ports.main}/dynamic`);
  System = socketIOClient.connect(`http://localhost:${config.ports.main}/system`);
  Logger = socketIOClient.connect(`http://localhost:${config.ports.main}/logger`);
}

  System.emit('who' ,{pid:process.pid , name:'electron-app' ,id:'electron'});
   app.on('ready' ,function(){
    //use one instance of BrowserWindow & keep it running to handle audio/video /pics ect...
    let BrowserWindow_delagate = new electron.BrowserWindow({show:false});
    BrowserWindow_delagate.loadURL(dynamicWindow);

    BrowserWindow_delagate.on('close' ,function(){
      Logger.emit('log' ,{event:'browser-window closed' ,value:''});
      BrowserWindow_delagate.hide();
    });

    //this configures BrowserWindow at runtime. ect postion & size
    Dynamic.on('update-browser-window' ,function(prop ,settings){
      Logger.emit('log' ,{event:'updateing browser window' ,prop ,settings});
      BrowserWindow_delagate[prop] && BrowserWindow_delagate[props](...settings);
    });
    Dynamic.on('close-browser-window' ,function(){
      Logger.emit('log' ,{event:'browser-window closeing' ,value:''});
      BrowserWindow_delagate.hide();
    });

  if(flags.dev){
        let win = new electron.BrowserWindow({width:1900,height:950 ,show:true});
      win.loadURL(`http://localhost:${config.ports.main}/home?ip=${IP}&port=${config.ports.main}`);
      win.on('closed' ,function(){

        System.emit('quit');
      })
  }




  });

  flags.electron && app.on('window-all-closed', function (e) {
    flags.dev && app.quit();
  });
  flags.electron && app.on('will-quit',function(e){
    flags.dev && app.quit();
  });
}

flags.dev && flags.electron  && init();
flags.production && flags.electron && (module.exports = init)
