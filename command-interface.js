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
    console.log("killed webpack clients");

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
    console.log("killed mocha");

}
function killElectron(){
  console.log("killing electron".red.bold);
  let getClients = subProcess.filter(e => e.name ==='electron-app');
  getClients.forEach(function(ps){
    try{
      child_process.exec(`taskkill /pid ${ps.pid} /f`);
    }catch(err){
      console.log('electron' ,err);
    }
  });
    console.log("killed electron");
}


function restartElectron(){
  console.log("restarting electron".yellow.bold);
  killElectron();
  loadElectron();
}

function loadWebpack(args){

  if(!args.use || !~webpackApps.indexOf(args.use)){
    console.log(`${args.use} not found. [${webpackApps}]`);
    return
  }
  console.log("starting webpack".green.bold);
  let startWith = args.shell ? 'start cmd /c webpack' : 'webpack';

  let x = child_process.exec(`${startWith} --use ${args.use} --webpack`);
  args.stdout && !args.shell && x.stdout.on('data' , function(data){
    console.log(data)
  });
  args.stdout && !args.shell &&  x.stderr.on('data' , function(err){
    console.log(err)
  });

}
function loadMocha(args){
  console.log("starting mocha".green.bold);

  let useExternalShell = args.shell ? 'start cmd /k mocha' : 'mocha';
  let watch  = args.watch ? '-w' : '';
  let reporter  = args.reporter ? `--reporter ${args.reporter}` : '';
  args.watch && console.log('Mocha watching'.cyan.bold);

  let x = child_process.exec(`${useExternalShell} ./tests/index.js --mocha ${watch} -c ${reporter}`);
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

  let x = child_process.exec(`${startWith} ./built/index.js --electron`);
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


function gatherSubprocess(args, done){
    ps.lookup({command:'cmd' , arguments:/\b(mocha)\b|\b(webpack)\b/} ,(err ,list) =>{
      console.log(list);
      done()
    });
}

function killRobotClient(){
  let alias = config.alias.nodejs;

  let getClients = subProcess.filter(e => e.name ==='robot');
  if(getClients.length){
    console.log("killing robot client".red.bold);

    try{
      child_process.execSync(`taskkill /pid ${ps.pid} /f`);
    }catch(err){

    }
    try{
      child_process.execSync(`taskkill /im ${alias}.exe /f`);
    }catch(err){

    }
    console.log("killed robot client");
  }
}
function kill(done){
  if(subProcess.length < 1){
    let _subProcess = [];

    let flags = ['webpack' ,'electron' ,'mocha','MAIN' ,'robot'];
    let regex = flags.map(e => `\\b(${e})\\b`).join('|');

    ps.lookup({command:'cmd' , arguments:regex} ,(err ,list) =>{

      list.forEach(function(item){
        try{

          child_process.execSync(`taskkill /pid ${item.pid} /f`)
        }catch(err){

        }
      });
      done();
    });

    return
  }
  killElectron();
  killWebpack();
  killMocha();
  killRobotClient();
  done();
}

function killScript(args){
  if(args && args.script){
    switch(args.script){
    case 'mocha':killMocha();break;
    case 'webpack':killWebpack();
    case 'electron':killElectron();
    case 'robot':killRobotClient();
    case 'main':kill();
    }
  }

}

function help(){
  console.log(`
    Type:
    ${'webpack'.green} -  use:<subapp> shell:<optional(boolean | false)> stdout:<optional(boolean | true)>
    ${'test'.green} -   shell:<optional(boolean:false)> stdout:<optional(boolean | true)> watch:<optional(boolean | false)>
    reporter:(optional(string | 'spec'))
    ${'build'.green} -   out:<optional(string | ./)>  msi:<optional(boolean | false)>
    ${'restart'.green} -   no args
    ${'kill webpack'.green} - no args
    ${'electron'.green} - no args
    ${'kill tests'.green} - no args
    `);
}
let stdin = process.stdin;
stdin.setEncoding('utf8');

stdin.resume();

stdin.on('data',function(key){

let extraArgs = key.match(/(([a-z0-9]+)\:([a-z0-9]+))/gi);

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


help();
let command = key.replace(/(([a-z0-9]+)\:([a-z0-9]+))/gi , '').trim();

  switch(command){
    case 'webpack':loadWebpack(extraArgs);break;
    case 'restart':restartElectron();break;
    case 'electron':loadElectron();break;
    case 'kill':killScript(command);break;
    case 'test':loadMocha(extraArgs);break;
    case 'build':build(extraArgs);break;
    case 'help':help();break;
    default:{

      console.log(`'${command}' not found. type 'help' to list available commands`)
    }
  }
});

let isKilling = false;
process.on('SIGINT', function(){
  console.log("killing build process".red.bold);
  if(isKilling){

    return
  }
    setTimeout(function(){
        kill(function(){
          isKilling = true;
      process.exit()
    });
  },800)

  //process.exit();
});
