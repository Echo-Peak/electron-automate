import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import debounce from '../util/debounce';
import RaisedButton from 'material-ui/RaisedButton';

export default class RecordPad extends Component{
  constructor(props){
    super();
    this.state = {
      time:0,
      timeLeft:0,
      setTime:1,
      scale:0.5,
      stream:false
    };
    this.clock = null;
    this.mousemove = this.mousemove.bind(this);
    this.ctx = {};
    this.recorded = [];
    this.waiting = false;
    this.pollRate = 10;
    this.resizeListener = debounce(this.resize.bind(this),500)
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  resize(){

  }
  timer(){

  }
  mousemove(e){
    let x = e.clientX - this.ctx.left-1;
    let y = e.clientY - this.ctx.top -1;
    let _x = Math.floor((x/this.state.scale)*2);
    let _y = Math.floor((y/this.state.scale)*2);

    if(_x < 1){
      _x = 0;
    }
    if(_y < 1){
      _y = 0;
    }
    if(!this.waiting){
      this.waiting = true;
      setTimeout(()=>{
        this.waiting = false;
        if(!this.state.stream){
          this.recorded.push([_x , _y]);

        }else{
          consol.log(_x , _y)
        }
        this.ctx.ctx.fillRect(x ,y ,1 ,1);

      },this.pollRate)
    }


  }
  stopRecording(){
    this.refs.canvas.removeEventListener('mousemove' ,this.mousemove);
    this.setState({setTime:0 ,timeLeft:0})
  }
  startRecording(){
    let width = this.props.store.screenWidth;
    let height = this.props.store.screenHeight;

    this.recorded = [];
    let canvas = this.refs.canvas;
    canvas.width = width * this.state.scale;
    canvas.height = height * this.state.scale;
    var rect = canvas.getBoundingClientRect();
    this.ctx = {
      ctx:canvas.getContext('2d'),
      width:width * this.state.scale,
      height:height * this.state.scale,
      top:rect.top,
      left:rect.left
    }
    this.ctx.ctx.clearRect(0,0,this.ctx.width , this.ctx.height)
    this.ctx.ctx.fillStyle = 'red';

    canvas.addEventListener('mousemove' ,this.mousemove)

  }
  startTimer(){

  let time = Math.floor(this.state.setTime); //secs -> ms
    this.startRecording();
    this.clock = setInterval(()=>{
      time -= 1;
      if(time < 0){

        this.stopRecording();
        clearInterval(this.clock);
        return
      }
      console.log("recording");
      this.setState({timeLeft:time});
    },1000);
  }
  endTimer(){
    clearInterval(this.clock);
    this.setState({timeLeft:0 ,setTime:0});
    this.stopRecording();
  }
  sendRecord(){
    if(this.recorded.length){
      console.log(this.recorded)
      sockets.Robot.emit('exec-mouse-record' ,this.recorded);
    }
  }
  sliderChange(){

  }
  stream(){
    this.setState({setTime:Infinity});
    this.startRecording();
  }
  render(){

    let store = this.props.store;
    let isStreaming = this.state.stream ? true : false;
    // create keyboard timeline !!!
    // add programs route;
    // readdir program files for programs and open them?

    return (<div>
      <canvas ref='canvas'
        style={{width:store.screenWidth * this.state.scale,height:store.screenHeight * this.state.scale, background:'black'}}>

    </canvas> <br/>
    <span>Recording time {this.state.setTime}s</span>
    <Slider
      style={{width:'40%' ,margin:10}}
      step={1}
      value={this.state.setTime || 1}
      min={1}
      max={60}
      onChange={(e, value)=> this.setState({setTime:value})}/>
    <span>time left {this.state.timeLeft}</span>
    <FlatButton label="Start" onTouchTap={this.startTimer.bind(this , this.props.length)}/>
    <FlatButton label="Stop" onTouchTap={this.endTimer.bind(this)}/>
    <FlatButton label="send" secondary={true} onTouchTap={this.sendRecord.bind(this)}/>
    <RaisedButton primary={isStreaming} label="stream"  onTouchTap={this.stream.bind(this)}/>
  </div>
  )
  }
}
