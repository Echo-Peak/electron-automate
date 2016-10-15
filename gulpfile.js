var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
var concat = require('gulp-concat');
var socketIO = require('socket.io');
var socketIOClient = require('socket.io-client');
var child_process = require('child_process');
var jadeify = require('gulp-jade');
var path = require('path');
var watch = require('gulp-watch');
let colors = require('colors');
let browserSync = require('browser-sync');
let rename = require('gulp-rename');
let ps = require('ps-node');
let config = require('./built/config');
let commandInterface = require('./command-interface');


let appClients = {};

let chrome_path  = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
let logger = socketIOClient.connect(`http://localhost:${config.ports.main}/logger`);
let System = socketIOClient.connect(`http://localhost:${config.ports.main}/system` ,{reconnect:true});

System.emit('who' ,{name:'MAIN' ,id:'MAIN' ,pid:process.pid});


let launchChrome= !!~process.argv.indexOf('--chrome') &&
child_process.execFile(chrome_path ,[`http://localhost:${config.ports.main}`]);

let electron = !!~process.argv.indexOf('--electron');
let devMode = !!~process.argv.indexOf('--dev') ? '--dev' : '';


logger.on('log' ,function(msg){
  let value;
  if(typeof msg.value === 'string'){
    value = msg.value
  }else{
    value = JSON.stringify(msg.value);
  }
    console.log(`
      ${'Event'.cyan.bold} : ${msg.event}
      ${'value'.yellow.bold} : ${value}
      `)
});

logger.on('fail' ,function(msg){
  console.log('Error'.red.bold)
});

function consoleBeep(msg){
  process.stdout.write('\007' +msg );
}
function plumberHandler(done){

  return {
    errorHandler:function(err){
      consoleBeep((err.message).yellow);
      done(err);
    }
  }
}
~process.argv.indexOf('--electron') && child_process.exec(`electron ./built/index.js ${devMode && devMode}`);
gulp.task('init' ,['scss','jadeify' ,'app','watches']);

//gulp.task('server',serverCallback.init);
gulp.task('scss',scss);
gulp.task('jadeify',_jadeify);

gulp.task('watches',watches);
gulp.task('app',startApp);
gulp.task('restart',restart);
//gulp.task('server' ,['nodemon'] ,server);


function restart(done){
  appClients['main'].kill();
  appClients['main'].on('close' ,function(){
    startApp(done)
  })
}

function server(done){
    browserSync.init(null, {
      proxy: "http://localhost:7200",
        browser: "google chrome",
        port: 7000,
  });
  done()
}



function startApp(done){

  if(electron){
    appClients['main'] = child_process.execFile('electron' ,['./built/index.js' ,'--electron' ,`${devMode && devMode}`]);
    appClients['main'].stdout.setEncoding('utf8');
    appClients['main'].stdout.on('data',function(msg){
      console.log('[electron]'.cyan.bold, msg.toString());
    });
    appClients['main'].stderr.on('data',function(msg){
      console.log('[electron]'.red.bold, msg.toString());
    })
    done()
  }else{
      appClients['main'] = child_process.fork('./built/index.js' ,['--express' ,`${devMode && devMode}`],{stdio:'pipe' ,silent:true});
      appClients['main'].stdout.setEncoding('utf8');
      appClients['main'].stderr.setEncoding('utf8');
  appClients['main'].stdout.on('data',function(msg){
    console.log('[MAIN]'.cyan.bold, msg);
    process.stdout.write(msg)
  });
  appClients['main'].stderr.on('data',function(msg){
    console.log('[MAIN]'.red.bold, msg);
  })
  done()
  }
  //placeholder

}


function scss(done){
  if(!scss.basename){
    done();
    return
  }
 gulp.src(`./src/${scss.basename}/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(`./built/static/${scss.basename}`))
  .on('end' ,function(){

    System.emit('reload');
    done()
    })

}

function _jadeify(done){

if(!_jadeify.basename){
  done();
  return
}
  //console.log("starting jade" );
    gulp.src(`./src/${_jadeify.basename}/index.jade`)
    .pipe(plumber(plumberHandler(done)))
    .pipe(rename(`${_jadeify.basename}.jade`))
    .pipe(gulp.dest(`./built/views`))
    .on('end' ,function(_done){

      System.emit('reload');
      done()
  })
}



let expressFiles = [
  './built/**/*',
  '!./built/**/node_modules*/**/*',
  '!./built/static/**/*.js',
  '!./built/static/**/*.css',
  '!./built/**/node*/**/*',
];

function watches(){
  watch('./src/**/index.jade' , (e) =>{
    let basename = e.relative.split(/\\/g)
    _jadeify.basename = basename.shift();
    //console.log('got',basename , e.relative);
   gulp.start('jadeify');
  });

  watch('./src/**/**/*.scss' ,(e) =>{
    let basename = e.relative.split(/\\/g);
    scss.basename = basename.shift();
     gulp.start('scss');
    });

  watch(expressFiles ,(e)=>{
    gulp.start('restart')
  });
 }
