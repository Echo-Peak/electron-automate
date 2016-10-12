import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
//icons
import Repeat from 'material-ui/svg-icons/av/replay';
import Play from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import Stop from 'material-ui/svg-icons/av/stop';
import Autoplay from 'material-ui/svg-icons/av/loop';
import UseSelf from 'material-ui/svg-icons/action/compare-arrows';

import Next from 'material-ui/svg-icons/av/skip-next';
import Previous from 'material-ui/svg-icons/av/skip-previous';

const styles = {
  button:{

    margin: 12,
  },  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  }


};

@observer
export default class Controls extends Component{
  constructor(props){
    super();
    this.state = {};
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  mute(){
    this.props.xStore.setMute(!this.props.xStore.mute)
  }
  repeat(){
    if(this.props.xStore.current){

      this.props.xStore.setRepeat(!this.props.xStore.repeat);
    }
  }
  next(){
    this.props.xStore.next()
  }
  previous(){

  }
  togglePlayback(){
    if(this.props.xStore.current){
        this.props.xStore.setIsPlaying(!this.props.xStore.isPlaying);
    if(this.props.xStore.isPlaying){
      this.props.element.play();
      this.props.startclock();

    }else{
      this.props.element.pause();
      this.props.stopclock();
    }
    }

  }
  autoplay(){
    this.props.xStore.setAutoplay(!this.props.xStore.autoplay);
  }
  stop(){
    this.props.xStore.reset();

    sockets.Electron.emit('destroy-browser-window' ,this.props.xStore.currentID);
  }
  internalPlayback(){
    if(this.props.xStore.internalPlayback){
      this.props.xStore.elementREF.pause();
    }else{
      this.props.xStore.elementREF.currentTime = this.props.xStore.elasped;
      this.props.xStore.elementREF.play();
    }
    this.props.xStore.setInternalPlayback(!this.props.xStore.internalPlayback);
  }
  render(){
    let store = this.props.xStore;
    let mute = this.props.mute ? 'unmute'  : 'mute';
    let isPlaying = this.props.xStore.isPlaying ? 'pause' : 'play';
    let autoplay = this.props.xStore.autoplay ? 'on' : 'off';
    let repeat = this.props.xStore.repeat ? 'on' : 'off';

    let playbackStatus = this.props.xStore.isPlaying ? <Pause></Pause> : <Play></Play>;
    let ifAutoplay = store.autoplay ? '#52b652' : 'black';
    let ifRepeat = store.repeat ? '#2298ff' : 'gray';
    let internalPlayback = store.internalPlayback ? '#52b652' : 'black';
    return (<div className='audio-controls'>

      <IconButton title='mirror playback on this device' iconStyle={{...styles.mediumIcon,color:internalPlayback }} style={styles.medium}  onTouchTap={this.internalPlayback.bind(this)}>
        <UseSelf/>
      </IconButton>

        <IconButton title='toggle autoplay' iconStyle={{...styles.mediumIcon,color:ifAutoplay }} style={styles.medium}  onTouchTap={this.autoplay.bind(this)}>
          <Autoplay/>
        </IconButton>

        <IconButton title='repeat' iconStyle={{...styles.mediumIcon, color:ifRepeat}} style={styles.medium} onTouchTap={this.repeat.bind(this)}>
          <Repeat />
        </IconButton>

        <IconButton title='previous track' iconStyle={styles.mediumIcon} style={styles.medium}  onTouchTap={this.previous.bind(this)}>
          <Previous />
        </IconButton>

        <IconButton title='toggle playback' iconStyle={styles.mediumIcon} style={styles.medium} onTouchTap={this.togglePlayback.bind(this)} >
          {playbackStatus}

        </IconButton>

        <IconButton title='next track' iconStyle={styles.mediumIcon} style={styles.medium} onTouchTap={this.next.bind(this)}>
          <Next />
        </IconButton>

        <IconButton title='stop' iconStyle={styles.mediumIcon} style={styles.medium} onTouchTap={this.stop.bind(this)} >
          <Stop />
        </IconButton>


    </div>)
  }
}
