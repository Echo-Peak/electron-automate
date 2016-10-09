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

export default class Audio extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        audio:[],
        elasped:0,
        instance:null,
        prep:false,
        duration:{
          mins:0,
          secs:0,
          total:0
        },
        audioObj:{
          "id": null,
          "dims":{
            "auto":false,
            "width": 600,
            "height": 900
          },
          "center": true,
          "timeout": 1000,
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
      console.log('got it')
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
        sockets.Electron.emit('create-audio-buffer' ,filename);
        return
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
    this.setState({elasped:0, current:false});
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
  save(){
    let {name , data} = this.state.data;
    console.log(name);
   sockets.fs.emit('save-audio' ,{name , data});
  }
  deleteAudio(name){
    console.log('deleteing' ,name);
    sockets.fs.emit('delete-audio',name)
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
              <FlatButton label='STOP' primary={true} onTouchTap={this.closeInstance.bind(this)}></FlatButton>
              <List>
                {this.state.audio.map((e ,index) => (
                  <div key={uuid()}>
                  <ListItem
                    primaryText={e}
                    onTouchTap={this.spawnAudioProcess.bind(this,e)}>

              </ListItem>
              <FlatButton label='delete' onTouchTap={this.deleteAudio.bind(this,e)}></FlatButton>
            </div>
            ))}
            </List>
            </div>
            <div style={styles.slide}>

            <div className='folder-container'>
              <button>Select audio file
                <input  type="file" ref='folder' className='folder' onChange={this.prepAudio.bind(this)}/>
              </button>
            </div>
            {this.state.prep && <FlatButton label="save" primary={true} onTouchTap={this.save.bind(this)}/>}


            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
