import React from 'react';
let {Component} = React;
import Seekbar from './seek-bar';
import {observer} from 'mobx-react';
import Slider from 'material-ui/Slider';
import Controls from './controls';
import Snackbar from 'material-ui/Snackbar';
import Volume from './volume';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import LinearProgress from 'material-ui/LinearProgress';

let styles = {
  refresh: {
    display: 'inline-block',
    position: 'relative'
  },
  loader:{
    width:'80%',
    margin:'10 auto',

  }
}
@observer
export default class Player extends Component{
  constructor(props){
    super();
    this.state = {}
    this.clock = null;
    let self = this;

    //this.x_audio = new X_audio();
  }

  componentDidMount(){

    sockets.Electron.on('byte-transfer' ,(byteObj)=>{
      if(byteObj.total){
        this.props.xStore.totalBytes = byteObj.total;
      }else if(byteObj.sent){
        this.props.xStore.bytesReceived += byteObj.sent;
      }

    });
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  covertPlaytime(totalDuration){
    let d = totalDuration;
    var minutes = "0" + Math.floor(d / 60);
    var seconds = "0" + (d - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }
  setVolume(){

  }

  seekStart(){

  }
  seekEnd(){

  }
  startClock(){
    this.props.xStore.startClock();
    // this.clock = setInterval(()=>{
    //   this.props.xStore.setElapsed(this.props.xStore.elasped += 1);
    // },1000);
  }
  stopClock(){
    let clock = this.props.xStore.stopClock();
    //clearInterval(this.clock);
  }
  reset(){
    let clock = this.props.xStore.reset();
    // clearInterval(this.clock);
    // this.props.xStore.setElapsed(0)
  }
  render(){
    let x_audio = this.props.xStore;
    let current = x_audio.current ? x_audio.current : 'Nothing Playing';
    let volume = x_audio.volume <= 0 ? 'Muted' : x_audio.volume;
    let elasped = x_audio.elasped ? x_audio.elasped : false;
    let duration = x_audio.duration ? x_audio.duration : false;
    let element = this.props.element;

    let ifVolume = typeof volume ==='number' && `${Math.floor(volume*100)}%` || 'Muted';

    // <Slider
    //   style={{width:'20%' ,margin:20}}
    //   step={0.1} min={0} max={1}
    //   value={x_audio.volume}
    //    onChange={this.setVolume.bind(this)}/>

    return (<div className ='audio-player'>

      <section className='audio-player-top'>

        <div className='title'>
          <h4><i>{current}</i></h4>
        </div>
        <div className='flex'></div>
        <div className='stats'>
          <span>Volume: <strong>{ifVolume}</strong> </span>
          <span>elasped: <strong>{elasped}</strong> </span>
          <span>duration: <strong>{Math.floor(duration)}</strong>s </span>
        </div>
      </section>

      <div className='seekbar-container'>

        <div className='elapsed'>
          <span>{this.covertPlaytime(x_audio.elasped)}</span>
        </div>

        <Seekbar className='seekbar' xStore={x_audio}
        label='Seek audio'
        ref='slider'
        name={x_audio.current}
        seek={x_audio.elasped}
        isPlaying={x_audio.isPlaying}
        duration={x_audio.duration} >
      </Seekbar>

      <div className='length'>
        <span>{this.covertPlaytime(x_audio.duration)}</span>
      </div>

      <Volume className='volume'
        xStore={x_audio}
        value={x_audio.volume}>
      </Volume>
      </div>


      {x_audio.current &&
        <LinearProgress mode="determinate" value={x_audio.bytesReceived} min={0} max={x_audio.totalBytes} style={styles.loader}/>}
      <Controls
        startclock={this.startClock.bind(this)}
        stopclock={this.stopClock.bind(this)}
        reset={this.reset.bind(this)}
        xStore={x_audio}
        element={element}
        mute={x_audio.mute}
        ></Controls>

        <Snackbar
          open={x_audio.status.length ? true : false}
          message={x_audio.status}
          autoHideDuration={4000}
          onRequestClose={e => this.setState({toast:false})}
          />
    </div>)
  }
}
