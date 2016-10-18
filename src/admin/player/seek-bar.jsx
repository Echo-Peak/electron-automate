import React from 'react';
let {Component} = React;
import Slider from 'material-ui/Slider';

const styles = {
  seek:{
  //  width:'50%',
    //margin:'0 auto',
    //display:'inline-block'
  },
  container:{
    //position:'absolute',
    //width:'100%',
    //margin:10

  }
};

export default class SeekBar extends Component{
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
  seeking(ev ,nextValue){
    if(nextValue === this.props.xStore.elasped){
      return
    }
    //console.log(nextValue);
    this.props.xStore.setElapsed(nextValue);
    sockets.Dynamic.emit('seek',nextValue);
  }
  render(){
    let duration = this.props.duration;
    let ifTrackLength  = duration > 1 ? Math.floor(duration) : 1;

    return (<div style={styles.container} className={this.props.className}>

        <Slider disabled={!this.props.isPlaying}
            ref='slider'
           style={styles.seek}
           sliderStyle={{marginTop:0, marginBottom:0 ,position:'absolute' ,top:0, width:'100%'}}
           step={1}
           value={this.props.seek + 1 }
           min={0}
           max={ifTrackLength}

           onChange={this.seeking.bind(this)}  />
    </div>)
  }
}
