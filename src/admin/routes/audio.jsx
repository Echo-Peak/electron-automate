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
import Player from '../player';

import {observer} from 'mobx-react';

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
    position:'relative',
    top:-40,
    float:'right',
    marginRight:10
  },
  seek:{
    width:'80%',
    margin:'0 auto'
  }
};
@observer
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
        elm:null

    };


    this.x_audio = props.store;
    this.interval = null;
    this.config = {};
    window.xStore = this.x_audio;
  }

  componentDidMount(){
    let self = this;
    let element = this.refs.audio;
    self.x_audio.setElementREF(element);
    sockets.fs.on('audio-list' ,(files)=>{ //arr of browser window objs

      console.log(files)
      this.setState({audio:files.file , dir:files.dir})
    });
    sockets.fs.emit('get-audio-list');
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
    this.x_audio.createAudioBuffer(filename);
  }

  handleChange(value) {
    this.setState({slideIndex: value})
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

  queue(filename){
    let store = this.x_audio;
    this.x_audio.queue(filename);
  }
  render(){
    let props = this.props._props;

  //  let isCurrent = this.x_audio.current

    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="files" value={0}/>
            <Tab label="create" value={1}/>

          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>

              <Player
                element={this.state.elm}
                xStore={this.x_audio}
                isPlaying={this.state.isPlaying}
                current={this.state.current}
                duration={this.state.duration}
                settings={this.state.settings}
                seek={this.state.seek}>
              </Player>

                <List>
                  {this.state.audio.map((e ,index) => (
                    <div key={uuid()} style={{position:'relative'}}>
                    <ListItem
                      style={{background:e === this.x_audio.current ? 'rgba(64, 173, 237, 0.18)' : 'transparent'}}
                      primaryText={e}
                      onTouchTap={this.spawnAudioProcess.bind(this,e)}>

                </ListItem>

                <RaisedButton disabled={this.state.isPlaying} label='delete' onTouchTap={this.deleteAudio.bind(this,e)} primary={true} style={styles.button}></RaisedButton>
                <RaisedButton
                  disabled={this.x_audio.current === e}
                  label='queue'
                  onTouchTap={this.queue.bind(this,e)} secondary={true} style={styles.button}></RaisedButton>


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
      <audio src={this.x_audio.blob_url} ref='audio'></audio>
      </div>)
  }
}
