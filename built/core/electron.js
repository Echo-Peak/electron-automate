const electron = require('electron');
const app = electron.app;
let path = require('path');
let BrowserWindow_config = require('./browser-window');
let socketIOClient = require('socket.io-client');
let dynamicWindow = path.resolve(__dirname,`../data/gen/dynamic-window.html`);
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
let config = require('../config');

dynamicWindow = `file:///${dynamicWindow}?ip=${IP}&port=${config.ports.main}&path=${process.cwd()}`;

let flags = {
  electron:!!~process.argv.indexOf('--electron'),
  dev:!!~process.argv.indexOf('--dev'),
  production:!!~process.argv.indexOf('--dev')
}





function init(express ,Dynamic ,System , Logger){

if(flags.dev){
  Dynamic = socketIOClient.connect(`http://localhost:${config.ports.main}/dynamic`);
  System = socketIOClient.connect(`http://localhost:${config.ports.main}/system`);
  Logger = socketIOClient.connect(`http://localhost:${config.ports.main}/logger`);
}

  System.emit('who' ,{pid:process.pid , name:'electron-app' ,id:'electron'});
   app.on('ready' ,function(){
     let screen = electron.screen.getPrimaryDisplay().workArea;
    //use one instance of BrowserWindow & keep it running to handle audio/video /pics ect...
    let BrowserWindow_delagate = new electron.BrowserWindow({show:false});
    BrowserWindow_delagate.loadURL(dynamicWindow);

    new BrowserWindow_config(BrowserWindow_delagate ,Dynamic , {logger:Logger , system:System} );
    // BrowserWindow_delagate.on('close' ,function(){
    //   Logger.emit('log' ,{event:'browser-window closed' ,value:''});
    //   BrowserWindow_delagate.hide();
    // });
    //
    // //this configures BrowserWindow at runtime. ect postion & size
    // Dynamic.on('update-browser-window' ,function(prop ,settings){
    //   Logger.emit('log' ,{event:'updateing browser window' ,prop ,settings});
    //   BrowserWindow_delagate[prop] && BrowserWindow_delagate[props](...settings);
    // });
    // Dynamic.on('close-browser-window' ,function(){
    //   Logger.emit('log' ,{event:'browser-window closeing' ,value:''});
    //   BrowserWindow_delagate.hide();
    //});

  if(flags.dev){

        let win = new electron.BrowserWindow({width:1900,height:screen.height / 2 ,show:true});
      win.loadURL(`http://localhost:${config.ports.main}/home?ip=${IP}&port=${config.ports.main}`);
      win.on('closed' ,function(){

        //System.emit('quit');
      });
      win.setTitle('entry into electron-automate (dev only)');
      win.setPosition(0,0);
      BrowserWindow_delagate.setTitle('Dynamic browser window');
      BrowserWindow_delagate.webContents.openDevTools();
      BrowserWindow_delagate.show();
      BrowserWindow_delagate.setPosition(0,screen.height/2);
      BrowserWindow_delagate.setSize(1920 ,screen.height/2);
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
