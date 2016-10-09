let child_process = require('child_process');
let config = require('../built/config');
let fs = require('fs-extra');
let path = require('path');
let colors = require('colors');
let localNode = path.resolve(__dirname ,'../built/exec/node');

let alias = config.alias.nodejs.name || 'node-alias';

fs.unlink(`${localNode}\\${alias}.exe`  ,function(err){
  if(err){
    console.log('Try running again in elevated command prompt'.cyan.bold);
    console.log(err);
    return
  }
  fs.unlink(localNode ,function(){
    console.log(`uninstalled node ${process.version}`.cyan.bold)
  });
})
