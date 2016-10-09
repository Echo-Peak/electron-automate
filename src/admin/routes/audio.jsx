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
import RaisedButton from 'material-ui/RaisedButton';
import FlatInput from '../ui/flat-input';
import Slider from 'material-ui/Slider';
import SeekBar from '../ui/seek-bar';

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
  },
  button:{
    position:'absolute',
    top:0,
    right:0
  },
  seek:{
    width:'80%',
    margin:'0 auto'
  }
};

export default class Audio extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        audio:[],
        elasped:0,
        instance:null,
        prep:false,
        isPlaying:false,
        names:[],
        totalSize:0,
        action:false,
        seek:0,
        seeking:false,
        duration:{
          mins:0,
          secs:0,
          total:1
        },
        audioObj:{
          "id": null,
          "dims":{
            "auto":false,
            "width": 600,
            "height": 900
          },
          "mediaType":{
            "src":"generated",
            "type":"audio"
          },
          "center": true,
          "timeout": 1000,
          volume:1,
          "alwaysOnTop": true,
          "skipTaskbar": true,
          "title": "audio",
          "hasShadow": true,
          "frame": false,
          "moveable": false,
          "show": false
        }
    };
    this.interval = null;
    this.config = {}
  }

  componentDidMount(){
        let self = this;
    sockets.fs.on('audio-list' ,(files)=>{ //arr of browser window objs

      console.log(files)
      this.setState({audio:files.file , dir:files.dir})
    });
    sockets.fs.emit('get-audio-list');

    sockets.Electron.on('audio-buffer' ,function(chunk){

      let o = document.createElement('audio');
      o.src = `data:audio/mp3;base64,${chunk}`;

      o.onloadeddata  = function(e){
        let mins = o.duration / 60;
        let secs = o.duration % 60;
        let dur = self.state.duration;
        console.log(self.state.current, o.duration ,Math.floor(o.duration * 1000))
        self.config = Object.assign(self.state.audioObj ,{
          id:uuid(),
          timeout:Math.floor(o.duration * 1000)
        });
        dur.mins = mins.toFixed(0);
        dur.secs = secs.toFixed(0);
        dur.total = o.duration.toFixed(1);
          //console.log(dur)
        sockets.Electron.emit('create-browser-window' ,self.state.current , 'audio' ,self.config);

         self.setState({duration:dur})
         self.clock();
      }

    });

    sockets.fs.on('audio-status' ,function(status){
      let {timeLeft ,currentFile} = status;
      console.log(status)
    });
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    this.state.current = false;
    this.state.prep = false;
    sockets.Electron.emit('destroy-browser-window' ,this.config.id);
  }
  componentWillMount(){

  }
  spawnAudioProcess(filename){
    console.log('creating');

    if(!this.state.current){
        this.state.current = filename;
        this.setState({isPlaying:true});
        sockets.Electron.emit('create-audio-buffer' ,filename);

    }

  }
  clock(){

    clearInterval(this.interval);

    let self = this;
     this.interval = setInterval(function(){
       if(self.state.elasped >= self.state.duration.total){
         self.setState({elasped:0 ,current:false});
         self.closeInstance();

         clearInterval(self.interval);
         return
       }
       self.setState({elasped:self.state.elasped+1});

     },1000)
  }
  handleChange(value) {
    this.setState({slideIndex: value})
  }
  closeInstance(){
    clearInterval(this.interval);
    console.log('killing' ,this.state.current , this.config.id);
    this.setState({elasped:0, current:false ,isPlaying:false});
    sockets.Electron.emit('destroy-browser-window' ,this.config.id);

  }
  prepAudio(ev){
      let file = ev.target.files[0];
      let reader = new FileReader();
      let name = file.name;
      let self = this;
      reader.onload = function(res){
        let data = res.target.result;
        self.state.data = {name , data};
        self.setState({prep:true});
      }
      reader.readAsBinaryString(file);
  }
  save(stream){
    //let {name , data} = this.state.data;
    let names = stream.map(e => e.name);
    let size = stream.reduce((start ,item) => (start += item.data.length) ,0);
    this.setState({names ,totalSize:size});
    console.log('stream',names , size);
   sockets.fs.emit('save-audio' ,stream);
  }
  deleteAudio(name){
    console.log('deleteing' ,name);
    sockets.fs.emit('delete-audio',name);
  }

  seekTo(){
    let value  = parseInt(this.refs.slider.refs.slider.refs.input.value);

    if(this.state.elasped === value){
      return
    }

    this.setState({elasped:value});
    sockets.Electron.emit('seek-audio',value);

  }
  playPause(){
this.state.action  = !this.state.action;
        if(this.state.action){

      clearInterval(this.interval);
      sockets.Electron.emit('audio-action','pause');
    }else{
      this.clock();
      sockets.Electron.emit('audio-action','play');
    }

    this.setState({action:this.state.action});
    console.log('playPause' ,this.state.action)
  }
  setVolume(e ,value){
    let audio = this.state.audioObj;
    audio.volume = value;
    this.setState({audioObj:audio});
    sockets.Electron.emit('change-volume' ,value);
  }
  render(){


    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="presets" value={0}/>
            <Tab label="create" value={1}/>

          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <span>Time: {this.state.elasped} of {this.state.duration.total} - {this.state.duration.mins}:{this.state.duration.secs}</span>

              <h4>Playing {this.state.current || 'Nothing'}</h4>
              <span>Volume: {this.state.audioObj.volume*100}%</span>

              <Slider
                style={{width:'20%' ,margin:20}}
                step={0.1} min={0} max={1}
                value={this.state.audioObj.volume}
                 onChange={this.setVolume.bind(this)}/>

              <SeekBar
                label='Seek audio'
                ref='slider'
                name={this.state.current}
                seek={this.state.elasped}
                isPlaying={this.state.isPlaying}
                duration={this.state.duration}
                seekEnd={this.seekTo.bind(this,'end')}
                seekStart={this.seekTo.bind(this ,'start')}>
              </SeekBar>


              { this.state.isPlaying && <FlatButton label='kill' primary={true} onTouchTap={this.closeInstance.bind(this)}></FlatButton> }
              {this.state.isPlaying && <FlatButton label={this.state.action ? 'play' : 'pause'} primary={true} onTouchTap={this.playPause.bind(this)}></FlatButton>}
              <List>
                {this.state.audio.map((e ,index) => (
                  <div key={uuid()} style={{position:'relative'}}>
                  <ListItem
                    primaryText={e}
                    onTouchTap={this.spawnAudioProcess.bind(this,e)}>

              </ListItem>
              <RaisedButton disabled={this.state.isPlaying} label='delete' onTouchTap={this.deleteAudio.bind(this,e)} primary={true} style={styles.button}></RaisedButton>
            </div>
            ))}
            </List>
            </div>
            <div style={styles.slide}>
            <span>Will be added ({(this.state.totalSize /1024 /1024).toFixed(1)}MB)</span>
            <br></br>
            <ul>
              {this.state.names.map(e =>(
                <li key={uuid()}>{e}</li>
              ))}
            </ul>
            <FlatInput raised={true} secondary={true} stream={true} accept='.mp3' label='Upload audio files' onChange={this.save.bind(this)}></FlatInput>

            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
