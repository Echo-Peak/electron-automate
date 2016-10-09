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
import RecordPad from '../ui/record-pad';

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

export default class Mouse extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        mouseFunctions:[],
        waiting:true,
        screen:{
          width:0,
          height:0,
          orig:null
        }

    };



  }
  componentDidMount(){

  }
  componentDidMount(){
    let self =this;


        sockets.Robot.on('robot-screen' ,(msg)=>{

          console.log('screen!!3!!!!!' ,msg)
          if(msg){
        self.setState({
          screen:{
            width:msg.width *0.5,
            height:msg.height * 0.5,
            orig:msg
          }
        });
        console.error('fix screen here')
      // self.refs.screen.style.width = this.state.screen.width;
      // self.refs.screen.style.height = this.state.screen.height;
      // self.refs.screen.style.background = '#999';
      // console.warn(msg , self.refs.screen);
      //
      // this.elm = new Hammer(self.refs.screen);
      // this.elm.on('pan' ,this.mover.bind(this));
      // this.elm.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    }
    });

    sockets.Robot.on('mouse-functions' ,(fn)=>{
      console.log(JSON.parse(fn))
      this.setState({mouseFunctions:JSON.parse(fn)});
    });



      sockets.Robot.emit('get-mouse-functions');
      sockets.Robot.emit('get-robot-screen');


  }
  mover(ev){
    let rect = ev.target.getBoundingClientRect();
    let cx = Math.abs(ev.srcEvent.clientX || ev.pointers[0].clientY - rect.left);
    let cy = Math.abs(ev.srcEvent.clientY || ev.pointers[0].clientY - rect.top);
    let x = cx / 0.5;
    let y = cy / 0.5;
    if(x <= this.state.screen.orig.width && y <= this.state.screen.orig.height){
      console.log(x ,y);
      sockets.Robot.emit('move-mouse' ,{x,y})
    }
    //console.log("asd");
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  handleChange(value) {
    this.setState({slideIndex: value})
  }
  execCommand(item){
    console.log(item);
    sockets.Robot.emit('execute-mouse-function' ,item);
  }
  mouseClick(leftRight){
    console.log('clicked')
      sockets.Robot.emit('mouse-click' ,leftRight)

  }
  done(){}
  render(){


    return (  <div className='mouse'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="functions" value={0}/>
            <Tab label="record input" value={1}/>
            <Tab label="raw input" value={2}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <List>
                {this.state.mouseFunctions.map((e ,index) => (
                  <ListItem key={uuid()}
                    primaryText={e.title}
                    secondaryText={e.desp}
                    onTouchTap={this.execCommand.bind(this ,e)}
                    >

              </ListItem>))}
            </List>
            </div>
            <div style={styles.slide}>
              <RecordPad length={10} onDone={this.done.bind(this)} size={this.state.screen}></RecordPad>

            </div>
            <div style={styles.slide}>
              {this.state.waiting && <span>Waiting for screen</span>}
              <div
                style={{margin:15}}
                className='client-screen' ref='screen'></div>
              <FlatButton label='Left click' primary={true} onTouchTap={this.mouseClick.bind(this,'left')}></FlatButton>
            <FlatButton label='right click' primary={true} onTouchTap={this.mouseClick.bind(this,'right')}></FlatButton>
            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
