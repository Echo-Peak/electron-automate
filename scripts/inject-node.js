let child_process = require('child_process');
let config = require('../built/config');
let fs = require('fs-extra');
let path = require('path');
let localNode = path.resolve(__dirname ,'../built/exec/node');
let externalNode = 'c:\\Program Files\\nodejs';
let colors = require('colors');

  // try{
  //   fs.unlink(`${localNode}/gitignore.txt`);
  // }catch(err){}


let targetVersion = 6; //Nodejs 6.*
let version = parseInt(process.version.match(/\d/));
if(version < 6){
  console.log("this application need node 6.* plus to operate".red.bold);
  process.exit()
}else{
  console.log(`creating sybmlink... ${localNode} <==> ${externalNode}.`.cyan.bold);
  fs.mkdirs(path.resolve(__dirname ,'../built/node_modules') , function(){});
  fs.ensureSymlink(externalNode , localNode ,function(err ,s){
    if(err){
      console.log('Try running again in elevated command prompt'.cyan.bold);
      console.log(err);
      return
    }
    fs.copy(localNode + '/node.exe', localNode + '/node-alias.exe', function (err) {
  if (err) {
    return console.error(err)
  }
  console.log("success!".green.bold)
}) // copies nodejs
  });

}
