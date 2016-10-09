import React from 'react';
let {Component} = React;
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import YoutubeGenerator from '../ui/youtube-generator';
import CustomWindow from '../ui/custom-window';
import FlatInput from '../ui/flat-input';
const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  slide:{
    height:900
  }
};

export default class Intro extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        timeLeft:0,
        presets:[],
        package:{},
        current:{},
        currentPlaying:null,
        youtube:{
          width:false,
          frame:false,
          height:false,
          mute:'no',
          timeout:0,
          mediaType:{},
          dims:{
            height:0,
            width:0
          }
        },
        window:{
          "dims":{
            "auto":true,
            "scale":0.6,
            "width": 600,
            "height": 900
          },
          nodeIntegration:false,
          "center": true,
          "timeout": 29000,
          "alwaysOnTop": true,
          "skipTaskbar": false,
          "title": "ss",
          "hasShadow": true,
          "frame": false,
          "show": true,
          "moveable": false,
        },
        ready:false
    };
    this.interval = null;
  }

  componentDidMount(){
    console.log('sent')

    sockets.fs.on('window-list' ,(metadata)=>{ //arr of browser window objs

      let data = metadata.map(e => JSON.parse(e));
      console.log(data)
      this.setState({presets:data})
    });

    sockets.fs.emit('get-window-list');
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  componentWillMount(){

  }
  execIntro(item , presetName){
    if(this.state.currentPlaying){

      return;
    }
    clearInterval(this.interval);
    let opts = this.state.presets[item];
    this.state.current = opts.id;
    this.setState({timeLeft:opts.timeout/1000 ,currentPlaying:opts.id});
  //  let config = Object.assign(this.state.window , this.state.youtube)

  console.log(presetName , opts);

    this.clock();
    switch(opts.mediaType.type){
      case 'file': sockets.Electron.emit('create-browser-window' ,presetName.id ,'file', opts);break;
      case 'url': sockets.Electron.emit('create-browser-window' ,presetName.id ,'url', opts);break;
      case 'youtube': sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube', opts);break;
      case 'custom': sockets.Electron.emit('create-browser-window' ,uuid() ,'custom', opts);break;
    }


    console.log('emmited' , opts)


  }
  clock(secs){
    let self =this;
    this.interval = setInterval(function(){
      if(self.state.timeLeft <= 0){
        self.setState({currentPlaying:null})
        clearInterval(self.interval);
        return
      }
      self.setState({timeLeft:self.state.timeLeft -1})
    },1000)
  }
  handleChange(value) {
    this.setState({slideIndex: value})
  }

  save(){
    if(this.state.ready && this.state.package.package && this.state.package.package.ext ==='json'){
      let requiredFields = JSON.parse(this.state.package.package.value);

      if(requiredFields.id){

        sockets.fs.emit('save-intro' ,this.state.package);
        console.log('sending' ,this.state.package);
      }else{
        alert('invailed config id')
      }


    }else{
      alert('file / folder does not contain package.json')
    }
  }
  createPackage(ev){
    let files = ev.target.files;
    let cFiles = Array.apply(0, files);
    let cc = 0;
    let totalSize = 0;
    let self = this;
    console.log(cFiles);

    cFiles.map(function(file ,index , arr){
    let reader = new FileReader();

    reader.onload = function(res){
      cc += 1;
      totalSize += file.size
      let filenameData = file.name.split('.');
      let ext = filenameData[filenameData.length - 1];
      let filename = filenameData[0];
      let text = res.target.result;

      self.state.package[filename] = {
        ext:ext,
        size:file.size,
        value:text
      }
      //console.log(text)
      if(cc === arr.length){
        self.setState({ready:true});

      }
    }
    reader.readAsText(file);
    });
  }
  destroy(){
    clearInterval(this.interval);
    this.setState({timeLeft:0 ,currentPlaying:null})
    sockets.Electron.emit('destroy-browser-window' ,this.state.current);
    console.log('destorying' ,this.state.current);
  }
  createYoutube(ytConfig){
    let ready = {};
    let _dimsConfig = Object.assign({} ,{
      id:ytConfig.id,
      seekTo:ytConfig.seekTo,
      volume:ytConfig.volume,
      mute:ytConfig.mute,
      frame:ytConfig.frame,
      timeout:ytConfig.timeout,
      mediaType:{
        type:'youtube'
      },
      dims:{
        auto:ytConfig.auto,
        height:ytConfig.height,
        width:ytConfig.width,
        scale:ytConfig.scale
      },
      pos:{
        y:ytConfig.y,
         x:ytConfig.x
      }
    })
    // this.state.youtube.id = uuid();
     this.state.currentPlaying = `Youtube - ${ytConfig.id}`;
     _dimsConfig.timeout = ytConfig.timeout * 1000;
     this.setState({timeLeft:Math.floor(ytConfig.timeout) ,currentPlaying:this.state.currentPlaying});
     this.clock();
     let config = Object.assign(this.state.window , _dimsConfig);

     console.log('sent browser window' , config)

     sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube' ,config);
    // console.log(config)
  }

  render(){
    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="windows" value={0}/>
            <Tab label="custom" value={1}/>
            <Tab label="upload" value={2}/>
            <Tab label="youtube" value={3}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <FlatButton secondary={true} label='kill' onTouchTap={this.destroy.bind(this)}></FlatButton>
              <span>time left: {this.state.timeLeft}</span>
              <h4>Playing {this.state.currentPlaying ? this.state.currentPlaying : 'nothing'}</h4>
              <List>
                {this.state.presets.map((e ,index) => (
                  <ListItem key={uuid()}
                    primaryText={e.id}
                    secondaryText={`Type: ${e.mediaType.type}, Frame:${e.frame} , width:${e.dims.width} - auto(${e.dims.auto}) , height:${e.dims.height} - auto(${e.dims.auto}) , timeout:${e.timeout}`}
                    onTouchTap={this.execIntro.bind(this,index,e)}>

              </ListItem>))}
            </List>
            </div>
            <div style={styles.slide}>
              <CustomWindow></CustomWindow>
            </div>
            <div style={styles.slide}>


              <FlatInput raised={true} primary={true} label='upload window package' onChange={this.createPackage.bind(this)} accept='*.json/*.html'></FlatInput>

              </div>

            <div style={styles.slide}>
              <YoutubeGenerator create={this.createYoutube.bind(this)}></YoutubeGenerator>
            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
