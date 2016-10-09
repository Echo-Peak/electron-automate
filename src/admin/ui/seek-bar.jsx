import React from 'react';
let {Component} = React;
import Slider from 'material-ui/Slider';

const styles = {
  seek:{
    width:'50%',
    margin:'0 auto',
    display:'inline-block'
  },
  container:{
    //position:'absolute',
    //width:'100%',
    margin:10

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

  render(){
    let duration = this.props.duration;


    return (<div style={styles.container}>
        <span>Current {this.props.seek}</span>

        <Slider disabled={!this.props.isPlaying}
            ref='slider'
           style={styles.seek}
           step={1}
           value={this.props.seek}
           min={0}
           max={parseInt(duration.total)}
           onDragStart={this.props.seekStart}
           onDragStop={this.props.seekEnd}  />

         <span>Finish {duration.mins}:{duration.secs}</span>
    </div>)
  }
}
