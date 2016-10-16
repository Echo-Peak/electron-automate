import React from 'react';
let {Component} = React;
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import {observer} from 'mobx-react';

@observer
export default class YoutubeGenerator extends Component{
  constructor(props){
    super();
    this.state = {
      robotWidth:10,
      robotHeight:10,
      volume:1,
      id:'',
      auto:false,
      mute:false,
      timeout:1,
      frame:true,
      scale:0.5,
      x:0,
      y:0,
      seekTo:0,
      dialog:false,
      alwaysOnTop:false

    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  checkThenCreate(){
    if(!this.state.id.length){
      alert('need video id');
      return
    }
    console.log(this.state.timeout)
  //  console.log("checking");
    this.setState({dialog:false});
    let copy = Object.assign({} ,this.state);
    this.props.create(copy);
  }

  setToggle(prop ,e, value){
    this.setState({[prop]:value});
  }
  setSlider(prop ,e ,value){
    this.setState({[prop]:value});
  }

  time(seconds){
    var minutes = "0" + Math.floor(seconds/ 60);
    var seconds = "0" + (seconds - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }
  render(){
    const actions = [
    <FlatButton
      label="Create"
      primary={true}
      onTouchTap={this.checkThenCreate.bind(this)}
    />,
    <FlatButton
      label="close"
      primary={true}
      keyboardFocused={true}
      onTouchTap={e => this.setState({dialog:false})}
    />,
  ];
    return <h1>youtube</h1>
    return (<div className='container-fluid'>

      <section style={{padding:20}}>
        <TextField hintText="Youtube video id" errorText="This field is required" onChange={e => this.setState({id:e.target.value})}/>
        <br />
      </section>
      <section>
        <Toggle style={{width:150}} label="Frame" onToggle={this.setToggle.bind(this ,'frame')}/>
        <Toggle style={{width:150}} label="Mute" onToggle={this.setToggle.bind(this ,'mute')}/>
        <Toggle style={{width:150}} label="always on top" onToggle={this.setToggle.bind(this ,'alwaysOnTop')}/>
        <Toggle style={{width:150}} label="auto width/height" onToggle={this.setToggle.bind(this ,'auto')}/>
          <span>Timeout: {this.state.timeout} seconds</span>
          <Slider style={{width:'40%' ,margin:20}}
            step={1} value={this.state.timeout} min={1} max={300} onChange={this.setSlider.bind(this,'timeout')}/>
      </section>
        <span>Seek: {this.time(this.state.seekTo)}</span>
        <Slider style={{width:'40%' ,margin:20}}
          step={1} value={this.state.seekTo} min={0} max={5999} onChange={this.setSlider.bind(this,'seekTo')}/>
        <span>Volume: {this.state.volume*100}%</span>
            <Slider style={{width:'40%' ,margin:20}}
              step={0.05} value={this.state.volume} min={0} max={1} onChange={this.setSlider.bind(this,'volume')}/>
      <section>

      </section>
      <section>
        <span>Scaling: {this.state.scale}</span>
        <Slider style={{width:'80%' ,margin:'0 auto'}}
          step={0.05} value={this.state.scale} min={0.1} max={1} onChange={this.setSlider.bind(this,'scale')}/>

        <span>Width: {this.state.width}</span>
          <Slider style={{width:'80%' ,margin:'0 auto'}}
            step={1} value={this.state.width} min={1} max={this.state.robotWidth} onChange={this.setSlider.bind(this,'width')}/>

          <span>Height: {this.state.height}</span>
          <Slider style={{width:'80%' ,margin:'0 auto'}}
            step={1} value={this.state.height} min={1} max={this.state.robotHeight} onChange={this.setSlider.bind(this,'height')}/>

          <span>X Cord: {Math.floor(this.state.robotWidth * this.state.x)}</span>
            <Slider style={{width:'80%' ,margin:'0 auto'}}
              step={0.01} value={this.state.x} min={0} max={1} onChange={this.setSlider.bind(this,'x')}/>

            <span>Y Cord: {Math.floor(this.state.robotHeight * this.state.y)}</span>
          <Slider style={{width:'80%' ,margin:'0 auto'}}
            step={0.01} value={this.state.y} min={0} max={1} onChange={this.setSlider.bind(this,'y')}/>
      </section>
      <section>
        <RaisedButton label="preview" primary={true}  onTouchTap={e => this.setState({dialog:true})}/>
        <RaisedButton label="create" secondary={true}  onTouchTap={this.checkThenCreate.bind(this)}/>
      </section>

      <Dialog
       title="Preview"
       actions={actions}
       modal={false}
       open={this.state.dialog}
       autoScrollBodyContent={true}
       onRequestClose={e => this.setState({dialog:false})}>

       <List>
         {Object.keys(this.state).map(e =>(
           <ListItem key={uuid()} primaryText={<strong>{e}</strong>} secondaryText={JSON.stringify(this.state[e])}></ListItem>
         ))}
       </List>
     </Dialog>
    </div>)
  }
}
