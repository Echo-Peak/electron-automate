
let express = require('express');
let path = require('path');
let http = require('http');
let socketIO = require('socket.io');
let socketIOClient = require('socket.io-client');
const JsonDB = require('node-json-db');
var cookieParser = require('cookie-parser');
let ps = require('ps-node');
const os = require('os');
let child_process = require('child_process');

let chai = require('chai');
let {expect , assert} = chai;

let ARGV = {
  electron:'--electron',
  dev:'--dev',
}

let config = {
  ports:{
    main:7200
  }
}
//mocks
let connectionType = require('./mocks/connection-types');

describe('connection types. only allow local ip adresses' ,function(){

  it('exteral ips' , function(){
    let x = connectionType('192.168.9.2');
    let xPort = connectionType('::njaah:192.168.9.2');
    expect(x).to.equal(false);
    expect(xPort).to.equal(false);
  });
  it('local ips' , function(){
    let localhost = connectionType('::1');
    let localIP_ipv6 = connectionType('::ffff:192.168.1.2');
    expect(localhost).to.equal(true);
    expect(localIP_ipv6).to.equal(true);
  });
  it('local ip range' , function(){
    let min = connectionType('::ffff:192.168.1.1');
    let between = connectionType('::ffff:192.168.1.5');
    let out = connectionType('::ffff:192.168.1.90');


    expect(min).to.equal(false);
    expect(between).to.equal(true);
    expect(out).to.equal(false);
  });
  it('random data' , function(){
    let _bool = connectionType(false);
    let _null = connectionType(null);
    let _obj = connectionType({});
    let _arr = connectionType([]);

    expect(_bool).to.equal(false);
    expect(_null).to.equal(false);
    expect(_obj).to.equal(false);
    expect(_arr).to.equal(false);
  });
})

//
//
// let app = require('./core/server')(config , config.ports.main);
//
//
// let History = require('./core/history')(app);
//
//
// const electron = require('electron');
//
//
// let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;
// const electronApp = electron.app;
//
// let System = socketIOClient.connect(`http://localhost:${config.ports.main}/system` ,{reconnect:true});
// System.emit('who' ,{pid:process.pid , name:'electron-app' ,id:'electron'});
// //start restart service
// // let nodejsPath = path.resolve(__dirname ,`exec/n/${config.alias.nodejs}.exe`);
// // let restartPath = path.resolve(__dirname ,`core/restart.js`);
// // child_process.exec(`${nodejsPath} ${restartPath} --restart`)
//
// console.log('running')
// app.use(cookieParser());
// //app.use(logger('dev'));
//
// app.use(express.static(__dirname+'/static'));
// app.set('views', __dirname+ '/views');
// app.set('view engine', 'jade');
//
//
//
// app.get('/home' ,function(req , res){
// let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
//
// if(connectionType(ip)){
//       res.render('home' ,{
//     port:config.ports.main,
//     internal_address:ip,
//     ip_adress:IP
//     });
//   }
// });
// app.get('/' ,function(req ,res){
//   res.redirect('/home')
// });
//
// ~process.argv.indexOf('--electron') && killDupes();
//
// ~process.argv.indexOf('--electron') && electronApp.on('ready' ,function(){
//
//     // let win = new electron.BrowserWindow({width:1900,height:950 ,show:true});
//     // win.loadURL(`http://localhost:${config.ports.main}/home`);
//     // win.on('closed' ,function(){
//     //   //System.emit('quit');
//     // })
//
//
//
// });
// ~process.argv.indexOf('--electron') && electronApp.on('window-all-closed', function (e) {
//   //electronApp.quit();
// });
// ~process.argv.indexOf('--electron') && electronApp.on('will-quit',function(e){
//   //electronApp.quit()
// });
//
// app.use(function(req, res, done){
//
//   console.log('wtf' , History.get())
//   let badRoute = History.find(req.path);
//   let o = History.get();
//   if(badRoute){
//       res.status(404).render('error' ,{route:req.path});
//   }else{
//     // if(req.path === '/home'){
//     //     done()
//     // }else if(o.length < 1){
//     //   res.status(404).render('error' ,{route:req.path});
//     // }
//     done()
//   }
//
// });
