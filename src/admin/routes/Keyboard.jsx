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
import Delay from '../ui/delay';
import CallbackAction from '../ui/callback-action';
import CardKeyboardShortcut from '../ui/shortcuts';
import  ToggleUI from '../ui/toggle-ui';
import CircularProgress from 'material-ui/CircularProgress';
import Slider from 'material-ui/Slider';

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
  }
};

export default class Keyboard extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        delayToggle:false,
        queItem:null,
        queCode:null,
        anchorEl:null,
        delay:80,
        loadKeyboard:true,
        sections:[],
        hold:0.5,
        inputValue:''
    };

  }

  componentDidMount(){
    //sockets.Robot.emit('robot-prep-keyboard-shortcuts' , this.state.shortcuts);
    sockets.Robot.on('keyboard-shortcuts' ,(shortcuts)=>{
      let obj = JSON.parse(shortcuts)
      obj = obj.reduce(function(start ,i ,index){
        let parent = Object.keys(i);
        start[parent[0]] = i[parent[0]];
        return start
      } , {});

      let sections = Object.keys(obj);
      this.setState({shortcuts:obj , sections ,loadKeyboard:false});

    });
    sockets.Robot.emit('get-keyboard-shortcuts');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  handleChange(value) {
    this.setState({slideIndex: value})
  }
  execCommand(item ,code){
    let _key = Array.isArray(item.code) ? item.code[1] : item.code;
    let _mod = Array.isArray(item.code) ? item.code[0] : false;
    return
    console.log(_key , _mod ,item ,code)
    if(item.hold){
      sockets.Robot.emit('robot-keyToggle',{key:_key , delay:item.hold || 20 ,mod:_mod});
    }else{

      sockets.Robot.emit('robot-keyTap',{key:_key , mod:_mod});


    }
  }
  sendText(){
    let input =  this.state.inputValue;
    let delay = this.state.delay;
    if(input.length){

      sockets.Robot.emit('robot-typeString' ,{input:input ,delay:delay});
    }
    //setTimeout(this.queueCommand.bind(this) ,parseInt(delay));

  }
  handleDelay(e){
    e.preventDefault();
    this.setState({
      delayToggle: true,
      anchorEl: e.currentTarget,
    });
  }
  closeDelay(){
    this.setState({
      delayToggle: false,
    });
  }
  setDelay(delay){
    this.setState({delay})
  }
  queueCommand(){
    this.state.queCode !== null && this.execCommand(this.state.queItem , this.state.queCode)
  }
  setQueue(item ,code){
    this.state.queItem = item;
    this.state.queCode = code;
  }
  setHold(e ,value){
    this.state.hold = value;
    this.refs.mockHold.innerText = value
    //this.setState({hold:value})

  }
  getShortcuts(){
    return this.state.shortcuts
  }
  render(){


    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="shortcuts" value={0}/>
            <Tab label="raw input" value={1}/>

          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <span>hold key for <span ref='mockHold'></span> seconds</span>
              <Slider style={{width:'90%' , margin:'0 auto'}} min={0.5}  step={0.5} max={30} onChange={this.setHold.bind(this)}/>

              <ToggleUI show={this.state.loadKeyboard} label='loading keyboard shortcuts' icon={<CircularProgress />}></ToggleUI>
                {!this.props.loadKeyboard && this.state.sections.map(e => (
                  <CardKeyboardShortcut
                  isLoading={this.state.loadKeyboard}
                  hold={e => this.state.hold}
                  key={uuid()}
                  section={e}
                  content={this.state.shortcuts[e]}>
                </CardKeyboardShortcut>))}

            </div>
            <div>
              <TextField hintText="input to send" onChange={e => this.setState({inputValue:e.target.value})}/>
              <br />
              <RaisedButton label='send' primary={true} onTouchTap={this.sendText.bind(this)}></RaisedButton>
            </div>
          </SwipeableViews>
        </div>

      </div>)
  }
}
