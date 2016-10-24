const readline = require('readline');
const colors = require('colors');
const child_process = require('child_process');
const webpack = require('webpack');
const config = require('./built/config');
const _package = require('./package');
const subProcess = [];
const packager = require('electron-packager');
const socketIO = require('socket.io-client');
const ps = require('ps-node');
const Process = require('./scripts/process'); //this is different than /built/core/process.js
//let installer = require('electron-installer-windows');

let webpackApps = ['home' ,'admin' ,'user' ,'guest'];

let electron_packager = Object.assign(_package.electron_packager ,{
  arch:process.arch,
  platform:process.platform
});

let electron_installer = Object.assign(_package.electron_installer ,{
  src:'./releases/packages/',
  dest:'./releases/installers'
});

let System = socketIO.connect(`http://localhost:${config.ports.main}/system`);

System.on('who' , function(psObj){
  subProcess.push(psObj);
});
System.on('kill' ,kill);

let subProcess_use_stdout = ~process.argv.indexOf('--stdout');
let subProcess_use_stderr = ~process.argv.indexOf('--stderr');
let subProcess_use_shell = ~process.argv.indexOf('--shell');

function killWebpack(){
  console.log("killing all webpack clients".red.bold);
  let getClients = subProcess.filter(e => e.name ==='webpack');
  getClients.forEach(function(ps){
    try{
      child_process.exec(`taskkill /pid ${ps.pid} /f`);
    }catch(err){
      console.log('webpack' ,err)
    }
  });
    console.log("killed webpack clients".green.bold);

}

function killMocha(){
  console.log("killing mocha".red.bold);
  let getClients = subProcess.filter(e => e.name ==='mocha');
  getClients.forEach(function(ps){
    try{

      child_process.exec(`taskkill /pid ${ps.pid} /f`);
    }catch(err){
console.log('mocha' ,err);
    }
  });
    console.log("killed mocha".green.bold);

}
function killElectron(){
  console.log("killing electron".red.bold);
  let getClients = subProcess.filter(e => e.name ==='electron-app');
  //console.log(getClients);
  getClients.forEach(function(ps){
    try{
      child_process.exec(`taskkill /pid ${ps.pid} /f`);
    }catch(err){

    }
  });
    console.log("killed electron".green.bold);
}


function restartElectron(){
  console.log("restarting electron".yellow.bold);
  killElectron();
  loadElectron();
}

function loadWebpack(args){
  let _args = args.args && args.args.split(',').join(' ') || '';
  if(!args.use || !~webpackApps.indexOf(args.use)){
    console.log(`${args.use} not found. [${webpackApps}]`);
    return
  }
  console.log("starting webpack".green.bold);
  let startWith = args.shell ? 'start cmd /c webpack' : 'webpack';

  let x = child_process.exec(`${startWith} --use ${args.use} --webpack ${_args}`);
  args.stdout && !args.shell && x.stdout.on('data' , function(data){
    console.log(data)
  });
  args.stdout && !args.shell &&  x.stderr.on('data' , function(err){
    console.log(err)
  });

}
function loadMocha(args){
  console.log("starting mocha".green.bold);
  let _args = args.args && args.args.split(',').join(' ') || '';

  let useExternalShell = args.shell ? 'start cmd /k mocha' : 'mocha';
  let watch  = args.watch ? '-w' : '';
  let reporter  = args.reporter ? `--reporter ${args.reporter}` : '';
  args.watch && console.log('Mocha watching'.cyan.bold);

  let x = child_process.exec(`${useExternalShell} ./tests/index.js --mocha ${watch} -c ${reporter} ${_args}`);
  args.stdout && !args.shell && x.stdout.on('data' , function(data){
    console.log('mocha' , data)
  });
  args.stdout &&  !args.shell && x.stderr.on('data' , function(err){
    console.log('mocha error',err)
  });
}

function loadElectron(args){
  console.log("starting electron".green.bold);
  let startWith = args.shell ? 'start cmd /k electron' : 'electron';
  let _args = args.args && args.args.join(' ') || '';

  !~args.args.indexOf('--dev') && console.log('did you mean to pass dev:true?.');
  let x = child_process.exec(`${startWith} ./built/core/electron.js --electron ${_args}`);
  args.stdout  && !args.shell && x.stdout.on('data' , function(data){
    console.log('electron',data)
  });
  args.stdout && !args.shell &&  x.stderr.on('data' , function(err){
    console.log('electron error',err)
  });
}

function build(args) {
    console.log("Build app".green.bold);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    args && args.out && (electron_packager.out = args.out);
    let name = `${electron_packager.out}-${process.platform}-${process.arch}`;

    electron_installer.src += '/'+name;

    packager(electron_packager, function(err, done) {
        if (err) {
            console.log("err", err);
            return
        }
        console.log(done);
        rl.question('Make installer? ', (answer) => {

            if (answer === 'yes') {

                installer(electron_installer, function(err) {
                    if (err) {
                        console.error(err, err.stack)
                        rl.close();
                    }
                    console.log('Successfully created package at ' + electron_installer.dest)
                    rl.close();
                })
            } else {

                rl.close();
            }

        });
    })
}



function killRobotClient(){
  let alias = config.alias.nodejs.name;
  console.log("killing robot client".red.bold);

  let getClients = subProcess.filter(e => e.name ==='robot');

  getClients = getClients.length ? getClients : alias;
  Process.exists(getClients ,function(bool ,list){
    console.log(bool ,list)
    bool && Process.kill(list).then(function(){
      console.log("killed robot client".green.bold);
    });
  })




}

function forceKill(done){
  console.log('force-killing!'.yellow.bold)

  //later to be customizable...in a config or package.json
  let scripts = [
    {name:'webpack' ,flag:'--webpack' , use:'node'},
    {name:'electron' ,flag:'--electron' , use:'electron'},
    {name:'mocha' ,flag:'--mocha' , use:'node'},
    {name:'robot' ,flag:'--robot' , use:config.alias.nodjs.name}
  ];

  let status = 0;
  commands.forEach(function(cmd, index, arr) {

      Process.exists(cmd, function(bool, list) {
          status += 1;

          if (bool) {
              Process.kill(list).then(function() {
                  if (status === arr.length) {
                      done();
                  }
              });
          } else {
              if (status === arr.length) {
                  done();
              }
          }
      });

  });

}

function kill(done){

  if(subProcess.length){
    killElectron();
    killWebpack();
    killMocha();
    killRobotClient();
    done();
  }else{
    forceKill(done);
  }

}

function killScript(args){

  if(args && args.script){
    console.log('got it' ,args);
    switch(args.script){
      case 'mocha':killMocha();break;
      case 'webpack':killWebpack();break;
      case 'electron':killElectron();break;
      case 'robot':killRobotClient();break;
      case 'main':kill();break;
    }
  }

}

function help(){
  console.log(`
    Run script inside of another shell: use --shell
    Run script inside of parent shell & use parent stdout: use --stdout
    Pass arguments to a script: args:arg1, arg2, --flag

    Scripts:
    ${'webpack'.green} -  use:<subapp> ...args
    ${'test'.green} - ...args
    ${'electron-packager'.green} -   out:<optional(string | ./)>  msi:<optional(boolean | false)> ...args
    ${'restart'.green}
    ${'kill'.green} - script:<script-name>
    ${'electron'.green} - ...args

    `);
}
let stdin = process.stdin;
stdin.setEncoding('utf8');

stdin.resume();

let regex = /(([a-z0-9]+)\:(\[?([a-z0-9\-,"']+\b))\]?)/gi;
stdin.on('data',function(key){
let extraArgs;
let args = key.match(regex);

  if(args){
    extraArgs = args.reduce(function(start ,item){

      let i = item.split(':');

      if(i[1] === 'true' || i[1] === 'false'){
        start[i[0]] = JSON.parse(i[1]);
      }
      if(i[1].match(/,/g)){
        start[i[0]] = i[1].split(',');
      }
      if(i[1].match(/\d+/g)){
        start[i[0]] = parseInt(i[1]);
      }

      start[i[0]] = i[1];

      return start
    },{});
  }else{
    extraArgs = {}
  }

  extraArgs.shell = key.includes('--shell');
  extraArgs.stdout = key.includes('--stdout');
  extraArgs.args = key.match(/\[(.+)\]/gi);
  extraArgs.args = extraArgs.args ? extraArgs.args[0]
  .replace(/\]|\[/g ,'')
  .split(',')
  .map(e => e.trim())
  .filter(e => e.length) : {};

  let command = key.match(/^[a-z\-]+/i);
  command = command ? command[0] : false;
  console.log(command);
  switch(command){
    case 'webpack':loadWebpack(extraArgs);break;
    case 'restart':restartElectron();break;
    case 'electron':loadElectron(extraArgs);break;
    case 'kill':killScript(extraArgs);break;
    case 'test':loadMocha(extraArgs);break;
    case 'build':build(extraArgs);break;
    case 'help':help();break;
    default:{

      console.log(`'${(command.toString()).yellow.bold}' not found. type 'help' to list available commands`)
    }
  }
});


//let isKilling = false;
process.on('SIGINT', function(){
  console.log("killing build process".red.bold);

    kill(function(){
      console.log("build process killed!".cyan.bold);
     process.exit();
    });
});
