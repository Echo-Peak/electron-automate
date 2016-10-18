import React from 'react';
let {Component} = React;
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import Audio from './audio';
import Youtube from './youtube';
import Video from './videos';
import Picture from './pictures';

let styles = {
  slide:{
    height:700,
    minHeight:'none'
  }

}
export default class Media extends Component{
  constructor(props){
    super();
    this.state = {
      slideIndex:0
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  handleChange(value) {
    this.setState({slideIndex: value})
  }
  render(){

    // <span>Will be added ({(this.state.totalSize /1024 /1024).toFixed(1)}MB)</span>
    // <br></br>
    // <ul>
    //   {this.state.names.map(e =>(
    //     <li key={uuid()}>{e}</li>
    //   ))}
    // </ul>
    // <FlatInput raised={true} secondary={true} stream={true} accept='.mp3' label='Upload audio files' onChange={this.save.bind(this)}></FlatInput>
    return (<div className='media'>
    <div>
    <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
      <Tab label="audio" value={0}/>
      <Tab label="videos" value={1}/>
      <Tab label="youtube" value={2}/>
      <Tab label="pictures" value={3}/>

    </Tabs>
    <SwipeableViews style={styles.swipe} index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
      <div style={styles.slide}>
        <Audio store={this.props.store.audio}></Audio>
      </div>

      <div style={styles.slide}>
        <Youtube store={this.props.store.video}></Youtube>
      </div>

      <div style={styles.slide}>
        <Video store={this.props.store.youtube}></Video>
      </div>

      <div style={styles.slide}>
        <Picture store={this.props.store.pictures}></Picture>
      </div>
    </SwipeableViews>
    </div>
    </div>)
  }
}
