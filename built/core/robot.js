/*
  CLIENT SERVER
*/
let robot = require('robotjs');
let io = require('socket.io-client');
let child_process = require('child_process');
let WMI = require('node-wmi');
let mouseFunctions;
let Mouse;
let port = process.argv[2];
let ip = process.argv[3];
let internalName = process.argv[4];

//kills duplicates of this process
if(process.platform === 'win32'){
    WMI.Query().class('Win32_Process').properties(['caption' ,'processid','commandline'])
  .where(`name='${internalName}.exe'`).exec(function(err, list) {
    if(list && list.length){
      list.filter(e => e.ProcessId !== process.pid)
      .forEach(e => child_process.execSync(`taskkill /pid ${e.ProcessId} /f`));
    }
  });
}else if(process.platform === 'darwin'){

}else{
  //linux
}



let System = io.connect(`http://${ip}:${port}/system` ,{reconnect:true});
let Robot = io.connect(`http://${ip}:${port}/robot` ,{reconnect:true});
let Logger = io.connect(`http://${ip}:${port}/logger` ,{reconnect:true});

Robot.on('connect' ,function(){
  Robot.emit('robot-screen' ,robot.getScreenSize());
  System.emit('robot-pid' ,process.pid);
});
System.emit('who' ,{name:'robot' ,pid:process.pid , id:'robot'})
System.on('connect' ,function(){
  System.emit('robot-screen' ,robot.getScreenSize());
});


System.emit('robot-screen' ,robot.getScreenSize());
System.emit('robot-pid' ,process.pid);


process.on('uncaughtException' ,function(err){
  Logger.emit('fail' ,{event:'ROBOT client ERROR' ,val:err.toString()});
});


try {
   mouseFunctions = require('./mouse');
  Mouse = new mouseFunctions(Robot);
} catch (err){
  Logger.emit('fail' ,{event:'ROBOT client ERROR loading' ,val:err.toString()});
}

Robot.on('get-pid' ,function(){
  Logger.emit('log' ,{event:'getting robot pid' ,val:process.pid});
  System.emit('robot-pid' ,process.pid);
});

Robot.on('robot-keyTap' ,function(key){
  try{
    robot.keyTap(key.key, key.mod);
    Logger.emit('log' ,{event:'keyTap' ,val:key})
  }catch(e){
    Logger.emit('fail' ,{event:'keyTap error. useing ' ,val:key ,err:e.toString()});
  }
});

Robot.on('robot-keyToggle' ,function(key){

  try{
      let cancel = function(){
    if(key.mod){
      robot.keyToggle(key.key , 'up' ,key.mod)
    }else{
      robot.keyToggle(key.key , 'up');
    }
    Logger.emit('log' ,{event:'keyToggle canceled' ,val:key})
  }
  if(key.mod){
    robot.keyToggle(key.key , 'down' ,key.mod)
  }else{
    robot.keyToggle(key.key , 'down');
  }
  setTimeout(cancel ,key.delay);
  }catch(e){
    Logger.emit('fail' ,{event:'keyToggle error' ,val:e.toString()});
  }



  Logger.emit('log' ,{event:'keyToggle' ,val:key});
});
//
Robot.on('robot-typeString' ,function(data){
  Logger.emit('log' ,{event:'typeString ' ,val:data});
  let delay = parseInt(data.delay);
  delay = (isNaN(delay) && 80) || delay;

  try{
      setTimeout(function(){

    robot.typeString(data.input.toString())
  },delay);
  }catch(e){

    Logger.emit('fail' ,{event:'typeString error' ,val:e.toString()});
  }

});
//
Robot.on('execute-mouse-function',function(fn){
  try{
  //Mouse[fn['call-function']](fn.vars);
  throw 'Mouse functions disabled.'
  Logger.emit('log' ,{event:'mouse-function executing' ,val:fn});
}catch(err){
  Logger.emit('log' ,{event:'mouse-function ERROR' ,val:err.toString() , got:fn});

}

});

Robot.on('get-robot-screen',function(){

    //child_process.exec(`msg %username% it worked`)
      try{
        let screenSize = robot.getScreenSize();

        System.emit('robot-screen' ,screenSize);
        Robot.emit('robot-screen' ,screenSize);
      Logger.emit('log' ,{event:'get-screen-size' ,val:screenSize});
    }catch(err){
      Logger.emit('fail' ,{event:'mouse-function ERROR' ,val:err.toString()});
    }

});



Robot.on('robot-move-mouse',function(cords){
  try{

    robot.moveMouse(cords.x , cords.y);
    Logger.emit('log' ,{event:'mouse move SUCCESS' ,val:cords});
}catch(err){
  Logger.emit('fail' ,{event:'mouse move ERROR' ,val:err.toString()});

}

});

Robot.on('mouse-click',function(leftRight){
  try{
    robot.mouseClick(leftRight);
    Logger.emit('log' ,{event:'mouse-click SUCCESS' ,val:leftRight});
}catch(err){
  Logger.emit('fail' ,{event:'mouse-click ERROR' ,val:err.toString()});

}

});

Robot.on('mouse-record', function(record){
  let failsafe = 0;
  let interval = null;
  let paths = record.slice(0);
  Logger.emit('log' ,{event:'mouse-record' ,value:record.length});
  interval = setInterval(function(){
    failsafe += 1;
    if(failsafe >= record.length){
      clearInterval(interval);
      return
    }
    let nextpath = paths.shift();
    robot.moveMouse(nextpath[0] , nextpath[1]);
  },10);
})
