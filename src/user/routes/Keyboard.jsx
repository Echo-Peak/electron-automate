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
import Delay from '../ui/delay';
import CallbackAction from '../ui/callback-action';

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
        delay:'80',
        shortcuts:[
          {hold:6000, cmd:'ENTER',body:'enter',code:'enter'},
          {cmd:'ESC',body:'Excape , pause , exit',code:'escape'},
          {cmd:'SPACEBAR',body:'pause ,scroll',code:'space'},
          {cmd:'ALT + ESC',body:'Cycle through items in the order in which they were opened',code:['alt' ,'escape']},
          {cmd:'WIN + E',body:'Open my computer',code:['command' ,'e']},
          {cmd:'WIN + M',body:'Minimize all windows.',code:['command' ,'m']},
          {cmd:'ALT + F4',body:'close active program',code:['alt' ,'f4']},
          {cmd:'WIN + D',body:'go to desktop',code:['command' ,'d']},
          {cmd:'WIN + R',body:'run',code:['command' ,'r']},
          {cmd:'ALT + SPACEBAR',body:'Open the shortcut menu for the active window ',code:['alt' ,'space']},
          {cmd:'WIN + TAB',body:'Cycle through programs on the taskbar by using Aero Flip 3-D',code:['command' ,'tab']},
          {cmd:'F5',body:'Refresh the active window',code:'f5'},
          {cmd:'WIN + L',body:'Lock your computer or switch users.',code:['command' ,'l']},
          {hold:2000, cmd:'WIN + SPACEBAR',body:'Preview the desktop.',code:['command' ,'space']},
          {cmd:'WIN + RIGHT-ARROW',body:'move window to right',code:['command' ,'right']},
          {cmd:'WIN + P',body:'Choose a presentation display mode.',code:['command' ,'p']},

          {cmd:'CTRL + Z',body:'Undo an action',code:['ctrl' ,'z']},
          {cmd:'F2',body:'Choose a presentation display mode.',code:'f2'},
          {cmd:'CTRL + RIGHT-ARROW',body:'Move the cursor to the beginning of the next word ',code:['ctrl' ,'right']},
          {cmd:'CTRL + A',body:'Select all items in a document or window',code:['ctrl' ,'a']},
        ],

    };

  }

  componentDidMount(){
    sockets.Robot.emit('robot-prep-keyboard-shortcuts' , this.state.shortcuts);

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

    console.log(_key , _mod)
    if(item.hold){
      sockets.Robot.emit('robot-keyToggle',{key:_key , delay:item.hold || 20 ,mod:_mod});
    }else{

      sockets.Robot.emit('robot-keyTap',{key:_key , mod:_mod});


    }
  }
  sendText(){
    let input =  this.refs.input.input.refs.input.value;
    let delay = this.state.delay;
    if(input.length){

      sockets.Robot.emit('robot-typeString' ,{input:input ,delay:delay});
    }
    setTimeout(this.queueCommand.bind(this) ,parseInt(delay));

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
  render(){


    return (  <div className='intros'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="shortcuts" value={0}/>
            <Tab label="raw input" value={1}/>

          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <List>
                {this.state.shortcuts.map((e ,index) => (
                  <ListItem key={uuid()}
                    primaryText={e.cmd}
                    secondaryText={e.body}
                    onTouchTap={this.execCommand.bind(this ,e, e.code)}
                    >

              </ListItem>))}
            </List>
            </div>
            <div style={styles.slide}>
              <TextField multiLine={true} hintText="Text to send"  hintStyle={styles.errorStyle} ref='input' id='input'/>
              <br/>
              <FlatButton label="Delay"  primary={true} onTouchTap={this.handleDelay.bind(this)}/>

              <CallbackAction queueCommand={this.setQueue.bind(this)} commands={this.state.shortcuts}></CallbackAction>

              <span>Delay: {parseInt(this.state.delay) / 1000}s</span>

              <Delay setDelay={this.setDelay.bind(this)} show={this.state.delayToggle} close={this.closeDelay.bind(this)} anchorEl={this.state.anchorEl}></Delay>

              <FlatButton primary={true} label="Send"  onTouchTap={this.sendText.bind(this)}/>

            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
