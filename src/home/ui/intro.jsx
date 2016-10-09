// let electron = require('electron');
// let path = require('path');
// let {BrowserWindow} = electron.remote;
// let fs = require('fs');

export default class Intro{
  constructor(item ,config){
    this.window = null;

    this.screen = null;


  //  I NEED TO EXLUDE EVERTHING NODE FROM HERE AND INTO RENDER process
    console.log('rannnn');
//     ioAction.on('got-screen-size' ,(_screen)=>{
//       this.screen = _screen;
//       this.timeout = config.timeout || 3000;
//       this.scale = config.scale || 1;
//
//
//
//
//     });
// robot.emit('get-screen-size');
    //
    // this.timeout = config.timeout || 3000;
    // this.mediaType = null;
    // this.autoScale = config.dims.auto;
    // this.width = config.dims.width;
    // this.height = config.dims.height;
    // this.src = null;
    // this.filePath = path.resolve(process.cwd() ,'app/main/intros');
    //
    // if(config.dims.auto && config.dims.scale){
    //   this.width = Math.floor(window.innerWidth * config.dims.scale);
    //   this.height = Math.floor(window.innerHeight * config.dims.scale);
    // }
    //
    //   let overwrite = Object.assign(config ,{
    //     width:this.width,
    //     height:this.height
    //   });
    //   //console.log(this.width , this.height ,window.innerHeight)
    // this.window =  new BrowserWindow(config);
    // switch(config.mediaType.type){
    //   case 'url':{this.src = config.mediaType.src}break;
    //   case 'file':{ this.src =`file:///${this.filePath}/${config.mediaType.src}.html`}break;
    //   case 'youtube':{this.makeYoutubeTemplate(config.mediaType.src ,config.mediaType.query || '')}
    // }
    // this.window.loadURL(this.src);
    //
    //
    //
    // this.window.once('ready-to-show',this.show.bind(this));
    // setTimeout(this.destroy.bind(this) , this.timeout);
  }
  destroy(){
    this.window.close();
  }
  show(){
    this.window.show()
  }
  makeYoutubeTemplate(videoID ,query){
    let generatedPath = process.cwd() +'/app/main/generated/yt-template.html';
    let file = fs.readFileSync(generatedPath);
    file = file.toString();

    let f = `src="https://www.youtube.com/embed/${videoID}?${query}"`;
    let newFile = file.replace(/src="(.+?)"/ , f);
    fs.writeFileSync(generatedPath ,newFile)
  }
}
