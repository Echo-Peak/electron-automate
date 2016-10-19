let keyGen  = require('../crypto/genKeys');
let config = require('../built/config');
let fs = require('fs');

let child_process = require('child_process');

//THIS IS TEMPERARY!!!
//--id is the name of the folder to store key & secret
// --length is the length of the key
let accounts = ['admin' ,'user'].forEach(function(role){

  let seed = new keyGen.keyGen(['create','--id' , role ,'--length' ,'128' ,'--self']);

  keyGen.emmiter.on('seed' ,function(seedText){
   config.security.roles[role] = {}
   config.security.roles[role].key = seedText.trim();
   config.security.roles[role].permissions = [];

   fs.writeFile('./built/config.json' , JSON.stringify(config ,null ,2))
  });
});
