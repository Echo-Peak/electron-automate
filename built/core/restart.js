let ps = require('ps-node');
let child_process = require('child_process');
let socketIO = require('socket.io-client');

let port = process.argv[2];
let internalName = process.argv[3];
let nodejsAlias = process.argv[4];

let system;

function killMainProcess(){
  ps.lookup({command:internalName , arguments:'--single-instance'} , function(err ,list){
    try{
      child_process.execSync(`taskkil /pid ${list.pid} /f`);
    }catch(err){ }
  })
}
function killRobot(){

    ps.lookup({command:nodejsAlias , arguments:'--robot'} , function(err ,list){
      try{
        child_process.execSync(`taskkil /pid ${list.pid} /f`);
      }catch(err){ }
    })

}


ps.lookup({command:nodejsAlias ,arguments:'--restart'} ,function(err , list){
  if(list.length > 1){
    process.exit();
  }else{
    system = socketIO.connect(`http://localhost:${port}/system` , {reconnect:true});
    system.on('restart' ,function(){
      killMainProcess();
      killRobot();
      try{
        child_process.execSync(`start %cd%\"${internalName} - single".lnk`)

      }catch(err){

      }
    });
  }
});
