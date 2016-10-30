let child_process = require('child_process');
let path = require('path');
let cluster = require('cluster');
let config = require('../config');
let http = require('http');
let socketIO = require('socket.io');
let socketIOClient = require('socket.io-client');
let Process_Handler = require('./process');
let net  = require('net');
const os = require('os');
let IP = os.networkInterfaces()['Wireless Network Connection'][1].address;


let eventWrapper = e => 'System-handler: '+ e
let server;

let System = socketIOClient.connect(`http://localhost:${config.ports.main}/system`);
let Logger = socketIOClient.connect(`http://localhost:${config.ports.main}/logger`);

System.emit('who' ,{name:'system-handler' ,pid:process.pid});
process.on('uncaughtException' ,function(err){
  Logger.emit('fatal' ,{event:eventWrapper('uncaughtException'), value:err.toString()});
  console.error(err);
});
if(!process.argv.includes(config.flags.systemHandler)){
  throw new Error(`expected ${config.flags.systemHandler} flag`);
  //process.exit();
}

Process_Handler.check('node' ,config.flags.systemHandler ,function(bool ,list){

  let notThis = list && list.filter(e => e.ProcessId !== process.pid);
  (notThis && notThis.length && bool) ? Process_Handler.kill(notThis).then(checkPort) : checkPort();

});

let flags = {
  dev:!!~process.argv.indexOf('--dev')
}


function checkPort(){

 let portChecker = net.createServer(function(socket){

 });
 portChecker.on('error' ,(err)=>{

   if(err.code === 'EADDRINUSE'){
      if(process.argv.includes('--dev')){
        Logger.emit('system-handler' ,{event:eventWrapper('port is in used but process is still running in dev mode'), value:''});
   }else{
     Logger.emit('system-handler' ,{event:eventWrapper('port is in used!'), value:err.toString(), port:config.ports.app});
     console.log('port in use' ,err.toString())
     process.exit();
   }
   }



 });
 portChecker.on('listening' ,function(){
      startApp();
 })

 portChecker.listen(config.ports.app);



}

function startApp(){
  Logger.emit('system-handler' ,{event:eventWrapper('system-handler started'), value:''});
  console.log('created');
  server = http.createServer((res ,req) => {});
  server.listen(config.ports.app);
  let io = socketIO(server);

  io.on('connection' ,function(socket){
    System.emit('who' ,{name:'system-handler' ,pid:process.pid});

    socket.on('restart' ,function(){

    });
    socket.on('restart-robot' ,function(){

    });
    socket.on('terminate' ,function(){

    });
    socket.on('kill-robot' ,function(){

    });

  });


}
