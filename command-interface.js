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
const path = require('path');
const Process = require('./scripts/process'); //this is different than /built/core/process.js
//let installer = require('electron-installer-windows');

console.log("Interface Loaded.".cyan.bold , 'Type "help" to see available commans');
let webpackApps = ['home' ,'admin' ,'user' ,'guest'];

let electron_packager = Object.assign(_package.electron_packager ,{
  arch:process.arch,
  platform:process.platform
});

let electron_installer = Object.assign(_package.electron_installer ,{
  src:'./releases/packages/',
  dest:'./releases/installers'
});

//foo bin:webpack --shell use:admin script:webpack.config path:~ args:--use,--admin
let System = socketIO.connect(`http://localhost:${config.ports.main}/system`);
System.on('kill' ,kill);

let Scripts = {
  robot:{
    bin:config.alias.nodejs.name,
    exec:path.resolve(__dirname, `./built/exec/node/${config.alias.nodejs.name}.exe`),
    script:path.resolve(__dirname, `./built/core/robot.js`),
    argID:config.flags.robot
  },
  webpack:{
    exec:'webpack',
    bin:'node',
    append:['--config'],
    path:process.cwd(),
    script:`./webpack.config.js`,
    argID:config.flags.webpack,
    special:{
      flag:'use'
    }
  },
  mocha:{
    exec:'mocha',
    bin:'node',
    script:'./index.js',
    path:path.resolve(__dirname, `./tests`),
    argID:config.flags.mocha
  },
  systemHandler:{
    exec:'node',
    bin:'node',
    script:path.resolve(__dirname, `./built/core/system-handler.js`),
    argID:config.flags.systemHandler
  },
  electron:{
    exec:'electron',
    bin:'electron',
    script:path.resolve(__dirname, `./built/core/electron.js`),
    argID:config.flags.electron
  }

}

let platform_shell = {
  win32:{
    shell:'start cmd /k'
  },
  darwin:{
    shell:''
  },
  linux:{
    shell:''
  }
}

function build(args) {
    console.log("Building app...".green.bold);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    args && args.out && (electron_packager.out = args.out);
    let name = `${electron_packager.out}-${process.platform}-${process.arch}`;

    electron_installer.src += '/'+name;

    packager(electron_packager, function(err, done) {
        if (err) {
            console.log('Is this shell evavated?'.cyan.bold, err);
            rl.close();
            process.stdin.resume();
            return
        }

        rl.question('Make installer? ', (answer) => {

            if (answer === 'yes') {

                installer(electron_installer, function(err) {
                    if (err) {
                        console.error(err.toString())
                        rl.close();
                        process.stdin.resume();
                    }
                    console.log('Successfully created package at ' + electron_installer.dest)
                    rl.close();
                    process.stdin.resume();
                })
            } else {
                rl.close();
                process.stdin.resume();
            }

        });
    })
}


function runScript(script, args){
  if(!script){
    console.log('expected script');
    return
  }
  script = script.replace(/\r\n$/,'');
  if(!Scripts.hasOwnProperty(script)){
    console.log(`Script not found.  available: ${Object.keys(Scripts).join(', ')}`);
    return
  }
  let shell = platform_shell[process.platform].shell;
  let cwd = Scripts[script].path ? Scripts[script].path : process.cwd();
  let specialFlags =  Scripts[script].special ? Scripts[script].special : '';
  let id = Scripts[script].argID;
  let filename = Scripts[script].script ? Scripts[script].script : '';
  let _args = args.args.join(' ') || '';
  let scriptSpecificArgs = Scripts[script].append ? Scripts[script].append.join(' ') : '';

  if(specialFlags && args[specialFlags.flag]){
    specialFlags = `--${specialFlags.flag} ${args[specialFlags.flag]}`
  }else if(!args[specialFlags.flag] && specialFlags.flag){
    console.log(`expected ${specialFlags.flag}:<string> to be passed`);
    return
  }
  let safetyQoutes = Scripts[script].exec.match(/\\|\//g) && `${Scripts[script].exec}` || Scripts[script].exec;

  let startWith  = args.shell ? `${shell} ${safetyQoutes} ${scriptSpecificArgs}`: Scripts[script].exec;


  let EXEC = `${startWith} "${filename}" ${specialFlags} ${id} ${_args}`;

  console.log(`running ${script}`.green.bold);
  child_process.exec(EXEC ,{cwd} ,function(stderr ,stdout){
    args.stdout  && !args.shell && stderr ? console.log(stderr) : console.log(stdout);

  });

}

function killScript(script){

  if(!script){
    console.log('expected script name');
    return
  }
  if(!script in Scripts){
    console.log('script not found.');
    return
  }
  let bin = Scripts[script].bin;
  let id = Scripts[script].argID
    Process.exists(bin ,[id],function(bool ,list){

      bool && Process.kill(list).then(function(){
        //console.log(list);
        console.log(`killed ${list[0].Caption} - ${list[0].pid}`.green.bold);
      });
    });

}

function kill(done){

  let status = 0;
  let keys = Object.keys(Scripts);

  keys.forEach(function(item ,index ,arr){
    //TODO: undifined case!!!!
    Process.exists(Scripts[item].bin ,[Scripts[item].argID] ,(bool , list)=>{

      if(bool){
        Process.kill(list).then(()=>{
          status += 1;
          status === arr.length && done();
        });
      }else{
        status += 1;
        status === arr.length && done()
      }
    })
  });

}


function help(){
  console.log(`
    Run script inside of another shell: use --shell
    Run script inside of parent shell & use parent stdout: use --stdout
    Pass arguments to a script: args:arg1, arg2, --flag

    Type:
    clear - to clear console
    scripts  - to show list of scripts to run

    Scripts:
    ${'run'.green} -  use:<subapp> ...args
    ${'test'.green} - ...args
    ${'electron-packager'.green} -   out:<optional(string | ./)>  msi:<optional(boolean | false)> ...args
    ${'restart'.green}
    ${'kill'.green} - script:<script-name>
    ${'electron'.green} - ...args

    `);
}
function clearConsole(){
  process.stdout.write('\033c');
  console.log('console cleared!'.green.bold);
}
let stdin = process.stdin;
stdin.setEncoding('utf8');

stdin.resume();

function listScripts(){
  let s = Object.keys(Scripts).map(e => e.cyan.bold).join(', ');
  console.log(s)
}

let regex = /(([a-z0-9]+)\:(\[?([a-z0-9\-\.,"'\~]+))\]?)/gi;
stdin.on('data',function(key){
  key = key.replace(/\r\n/g,'');
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
  extraArgs.args = extraArgs.args ? extraArgs.args.split(',')
  .map(e => e.trim())
  .filter(e => e.length) : [];

  let command = key.match(/^[a-z\-]+/i);
  command = command ? command[0] : '';
  let binary = extraArgs.bin;
  let segments = key.split(' ');

  switch(extraArgs.path){
    case '~':extraArgs.path = process.cwd();break;
  }

  switch(command){

    case 'kill':killScript(segments[1]);break;
    case 'test':loadMocha(extraArgs);break;
    case 'build':build(extraArgs);break;
    case 'help':help();break;
    case 'run':runScript(segments[1] ,extraArgs);break;
    case 'clear':clearConsole();break;
    case 'scripts':listScripts();break;
    default:{
      console.log(`'${(command.toString()).yellow.bold}' not found. type 'help' to list available commands`)
    }
  }
});


let isKilling = false;
process.on('SIGINT', function(){
  if(!isKilling){
    isKilling = true;
    console.log("killing build process".red.bold);

    kill(function(){
      console.log("build process killed!".cyan.bold);
     process.exit();
    });
  }else{
    console.log("waiting".yellow);
  }

  //temp
  setTimeout(function(){
    console.log("force quit");
    process.exit();
  },8000);
});
