import React from 'react';
let {Component} = React;
import Slider from 'material-ui/Slider';
import VolumeUp from 'material-ui/svg-icons/av/volume-up';
import VolumeDown from 'material-ui/svg-icons/av/volume-down';
import VolumeMute from 'material-ui/svg-icons/av/volume-mute';

export default class Volume extends Component{
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
  toggleMute(){

  }
changeVolume(ev ,value){
  this.props.xStore.setVolume(value);

  sockets.Electron.emit('change-volume' ,this.props.xStore.volume);
}
  render(){
    let {xStore , value}  = this.props;
    let currentColumeState;
    switch(true){
      case (value <= 0):currentColumeState = <VolumeMute></VolumeMute>;break;
      case (value > 0 && value < 0.6):currentColumeState = <VolumeDown></VolumeDown>;break;
      case (value >= 0.6):currentColumeState = <VolumeUp></VolumeUp>;break;

    }

    return (<div className={this.props.className}>
      <div className='icons' onTouchTap={this.toggleMute.bind(this)}>{currentColumeState}</div>
        <Slider
          style={{width:100 ,margin:10 ,paddingLeft:20}}
          sliderStyle={{width:100, marginTop:0, marginBottom:0, position:'absolute' , top:0, paddingLeft:20}}
          step={0.05}
          min={0}
          max={1}
          value={value}
          onChange={this.changeVolume.bind(this)}/>
    </div>)
  }
}
