let packager = require('electron-packager');
let fs = require('fs');
let _package = fs.readFileSync('../package.json').toString();


let extraArgs = process.argv.join(' ').match(/(([a-z0-9]+)\:([a-z0-9]+))/gi);

  extraArgs = extraArgs && extraArgs.reduce(function(start ,item){
  let i = item.split(':');

  if(i[1] === 'true' || i[1] === 'false'){
    start[i[0]] = JSON.parse(i[1]);
  }
  if(i[1].match(/\d+/g)){
    start[i[0]] = parseInt(i[1]);
  }

  start[i[0]] = i[1];

  return start
},{});


let electron_packager = Object.assign(_package.electron_packager ,{
  arch:process.arch,
  platform:process.platform
});

packager(electron_packager, function(err, done) {
    if (err) {
        console.log("err", err);
        return
    }
    console.log('DONE!');
    console.log(done);

})
