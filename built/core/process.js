let ps = require('ps-node');
let config = require('../config');
let isDev = !!~process.argv.indexOf('--dev');
let isElectron = !!~process.argv.indexOf('--electron');
let isExpress = !!~process.argv.indexOf('--express');
let child_process = require('child_process');

module.exports = function(){
  if(isElectron && !isDev){
    ps.lookup({command:config.name ,arguments:'--electron'} ,function(err ,list){

      if(err){
        console.log(err)
      }
      list.forEach(function(_ps){
        
        child_process.exec(`taskkill /pid ${_ps.pid} /f`)
      })
    })
  }
}
