let child_process = require('child_process');
let config = require('../built/config');
let fs = require('fs-extra');
let path = require('path');
let colors = require('colors');

let localNode = path.resolve(__dirname ,'../built/exec/node');
let configPath = path.resolve(__dirname ,'../built/config.json');

let alias =  config.alias.nodejs.name || 'node-alias';

let newName = process.argv[2];
if(!newName || !newName.length){
  console.log("expected 3rd argument".red.bold);
  process.exit()
}
newName = newName.replace(/[^a-z0-9]+/gi ,'');

if(newName.match(/node/gi)){
  console.log(`alias can not be rename to '${newName}'. need to use a name other that '${newName}'`);
  process.exit()
}
fs.rename(`${localNode}\\${alias}.exe`  ,`${localNode}\\${newName}.exe` ,function(err){
  if(err){
    console.log('Try running again in elevated command prompt'.cyan.bold);
    console.log(err);
    return
  }
  fs.readFile(configPath ,function(err , data){
    let json = JSON.parse(data);
    json.alias.nodejs.name = newName;
    let stringy = JSON.stringify(json , null ,2);
    fs.writeFile(configPath ,stringy,function(err){
        if(err){
          console.log(err);
          return
        }
        console.log("save config!");
    });
  });
  console.log(`node renamed from '${alias}' to '${newName}'`);

})
