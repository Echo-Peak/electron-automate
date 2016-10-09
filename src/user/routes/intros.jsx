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

    sockets.fs.on('intro-list' ,(metadata)=>{ //arr of browser window objs

      let data = metadata.map(e => JSON.parse(e));
      console.log(data)
      this.setState({presets:data})
    });

    sockets.fs.emit('get-intro-list');
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  componentWillMount(){

  }
  execIntro(item , presetName){
    clearInterval(this.interval);
    let opts = this.state.presets[item];
    this.state.current = opts.id;
    this.setState({timeLeft:opts.timeout/1000});
  //  let config = Object.assign(this.state.window , this.state.youtube)

  console.log(presetName , opts);

    this.clock();
    switch(opts.mediaType.type){
      case 'file': sockets.Electron.emit('create-browser-window' ,presetName.id ,'file', opts);break;
      case 'url': sockets.Electron.emit('create-browser-window' ,presetName.id ,'url', opts);break;
      case 'youtube': sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube', opts);break;
    }


    console.log('emmited' , opts)


  }
  clock(secs){
    let self =this;
    this.interval = setInterval(function(){
      if(self.state.timeLeft <= 0){
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
    this.setState({timeLeft:0})
    sockets.Electron.emit('destroy-browser-window' ,this.state.current);
    console.log('destorying' ,this.state.current);
  }
  createYoutube(){
    let ready = {};
    this.state.youtube.id = uuid();
    this.state.current = this.state.youtube.id;
    this.setState({timeLeft:Math.floor(this.state.youtube.timeout /1000)});
    this.clock();
    let config = Object.assign(this.state.window , this.state.youtube)
    sockets.Electron.emit('create-browser-window' ,uuid() ,'youtube' ,config);
    console.log(config)
  }
  setValue(prop , e){
    let value = e.target.value;
    let int = parseInt(value);
    //this.state.youtube[prop] =
    switch(prop){
      case 'delay': ((this.state.youtube.timeout = int) && (this.state.youtube.mediaType.delay = int));break;
      case 'height':this.state.youtube.dims.height = int || false;break;
      case 'width':this.state.youtube.dims.width = int || false;break;
      case 'mute':(value === 'yes' && (this.state.youtube.mediaType.mute = true)) || (value === 'no' && (this.state.youtube.mediaType.mute = false));break;
      case 'frame':(value === 'yes' && (this.state.window.frame = true)) || (value === 'no' && (this.state.window.frame = false));break;
      case 'startAt':this.state.youtube.mediaType.startAt = int || 0;break;
      case 'volume':this.state.youtube.mediaType.volume = int || 100;break;
      case 'videoID':this.state.youtube.mediaType.videoID = value;break;

    }
    console.log(prop, int ,this.state.youtube)
  }
  render(){


    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="presets" value={0}/>
            <Tab label="create" value={1}/>
            <Tab label="youtube" value={2}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <FlatButton secondary={true} label='kill' onTouchTap={this.destroy.bind(this)}></FlatButton>
              <span>time left: {this.state.timeLeft}</span>
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

            <div className='folder-container'>
              <button>Select Package
                <input  type="file" multiple ref='folder' className='folder' onChange={this.createPackage.bind(this)}/>
              </button>
            </div>
            <FlatButton label="Send" primary={true} onTouchTap={this.save.bind(this)}/>


            </div>
            <div style={styles.slide}>
              <TextField floatingLabelText="videoID" onChange={this.setValue.bind(this ,'videoID')}/>
              <TextField floatingLabelText="width(BrowserWindow)" onChange={this.setValue.bind(this ,'width')}/>
              <TextField floatingLabelText="height(BrowserWindow)" onChange={this.setValue.bind(this ,'height')}/>
              <br></br>
              <TextField floatingLabelText="frame(yes)" onChange={this.setValue.bind(this ,'frame')}/>
              <br></br>
              <TextField floatingLabelText="delay(video length)" onChange={this.setValue.bind(this ,'delay')}/>
              <TextField floatingLabelText="start at(0)" onChange={this.setValue.bind(this ,'startAt')}/>
              <TextField floatingLabelText="volume(100)" onChange={this.setValue.bind(this ,'volume')}/>
              <TextField floatingLabelText="mute(no)" onChange={this.setValue.bind(this ,'mute')}/>

              <FlatButton label='create' onTouchTap={this.createYoutube.bind(this)}></FlatButton>
            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
