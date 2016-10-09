import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';

export default class RecordPad extends Component{
  constructor(props){
    super();
    this.state = {
      time:0,
      timeLeft:0,
      setTime:1,
    };
    this.clock = null;
    this.mousemove = this.mousemove.bind(this);
    this.ctx = {};
    this.recorded = [];
    this.waiting = false;
    this.pollRate = 10;

  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  timer(){

  }
  mousemove(e){
    let x = e.clientX - this.ctx.left-1;
    let y = e.clientY - this.ctx.top -1;
    let _x = Math.floor((x/0.8)*2);
    let _y = Math.floor((y/0.8)*2);

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
        this.recorded.push([_x , _y]);
        this.ctx.ctx.fillRect(x ,y ,1 ,1);

      },this.pollRate)
    }


  }
  stopRecording(){
    this.refs.canvas.removeEventListener('mousemove' ,this.mousemove);

  }
  startRecording(){
    this.recorded = [];
    let canvas = this.refs.canvas;
    canvas.width = this.props.size.width * 0.8;
    canvas.height = this.props.size.height * 0.8
    var rect = canvas.getBoundingClientRect();
    this.ctx = {
      ctx:canvas.getContext('2d'),
      width:this.props.size.width * 0.8,
      height:this.props.size.height * 0.8,
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
    this.setState({timeLeft:0});
    this.stopRecording();
  }
  sendRecord(){
    if(this.recorded.length){
      console.log(this.recorded)
      sockets.Robot.emit('exec-mouse-record' ,this.recorded);
    }
  }

  render(){


    // create keyboard timeline !!!
    // add programs route;
    // readdir program files for programs and open them?

    return (<div>
      <canvas ref='canvas' style={{width:this.props.size.width * 0.8 ,height:this.props.size.height * 0.8, background:'black'}}>

    </canvas> <br/>
    <span>Recording time {this.state.setTime}s</span>
    <Slider style={{width:'40%' ,margin:10}} step={1} value={this.state.setTime} min={1} max={60} onChange={(e, value)=> this.setState({setTime:value})}/>
    <span>time left {this.state.timeLeft}</span>
    <FlatButton label="Start" onTouchTap={this.startTimer.bind(this , this.props.length)}/>
    <FlatButton label="Stop" onTouchTap={this.endTimer.bind(this)}/>
    <FlatButton label="send" secondary={true} onTouchTap={this.sendRecord.bind(this)}/>
  </div>
  )
  }
}
