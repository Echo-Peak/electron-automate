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


import Custom from './custom';
import Controls from './controls';
import SavedWindows from './saved-windows';
import Youtube from './youtube';
import Upload from './upload';

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
        ready:false
    };
    this.interval = null;
  }

  componentDidMount(){
    console.log('sent')

    // sockets.fs.on('window-list' ,(metadata)=>{ //arr of browser window objs
    //
    //   let data = metadata.map(e => JSON.parse(e));
    //   console.log(data)
    //   this.setState({presets:data})
    // });
    //
    // sockets.fs.emit('get-window-list');
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

    // this.clock();
    // switch(opts.mediaType.type){
    //   case 'file': sockets.Electron.emit('create-browser-window' ,presetName.id ,'file', opts);break;
    //   case 'url': sockets.Electron.emit('create-browser-window' ,presetName.id ,'url', opts);break;
    //   case 'youtube': sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube', opts);break;
    //   case 'custom': sockets.Electron.emit('create-browser-window' ,uuid() ,'custom', opts);break;
    // }


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

     //sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube' ,config);
    // console.log(config)
  }

  render(){
    return (  <div className='windows'>
      <Controls store={this.props.store}></Controls>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="windows" value={0}/>
            <Tab label="custom" value={1}/>
            <Tab label="upload" value={2}/>
            <Tab label="youtube" value={3}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>

            <div style={styles.slide}>
              <SavedWindows  store={this.props.store}></SavedWindows>
            </div>

            <div style={styles.slide}>
              <Custom store={this.props.store}></Custom>
            </div>

            <div style={styles.slide}>
              <Upload store={this.props.store}></Upload>
              </div>

            <div style={styles.slide}>
              <Youtube  store={this.props.store}></Youtube>
            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
