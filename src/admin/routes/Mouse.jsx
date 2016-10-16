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
import {observer} from 'mobx-react';

import Cancel from 'material-ui/svg-icons/navigation/cancel';

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
  },
    fab:{
      marginRight: 20
    },
    controls:{
      position:'fixed',
      bottom:0,
      right:50,
      margin:10,
      zIndex:8200
    }

};
@observer
export default class Mouse extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        mouseFunctions:[],
        waiting:true

    };
  }

  componentDidMount(){
    let self = this;

    sockets.Robot.on('mouse-functions' ,(fn)=>{
      console.log(JSON.parse(fn))
      this.setState({mouseFunctions:JSON.parse(fn)});
    });

    sockets.Robot.emit('get-mouse-functions');

  }
  mover(ev){
    let rect = ev.target.getBoundingClientRect();
    let cx = Math.abs(ev.srcEvent.clientX || ev.pointers[0].clientY - rect.left);
    let cy = Math.abs(ev.srcEvent.clientY || ev.pointers[0].clientY - rect.top);
    let x = cx / 0.5;
    let y = cy / 0.5;
    if(x <= this.state.screen.orig.width && y <= this.state.screen.orig.height){
      //console.log(x ,y);
      sockets.Robot.emit('move-mouse' ,{x,y})
    }

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  handleChange(value) {
    this.setState({slideIndex: value})
  }
  execCommand(item){
    //console.log(item);
    sockets.Robot.emit('execute-mouse-function' ,item);
  }
  mouseClick(leftRight){

    sockets.Robot.emit('mouse-click' ,leftRight)

  }
  done(){

  }
  kill(){
    sockets.Robot.emit('stop');
  }
  render(){


    return (  <div className='mouse'>
        <div>
          <div style={styles.controls}>
             <FloatingActionButton style={styles.fab} onTouchTap={this.kill.bind(this)}>
              <Cancel />
            </FloatingActionButton>
          </div>

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
                    onTouchTap={this.execCommand.bind(this ,e)}>

              </ListItem>))}
            </List>
            </div>
            <div style={styles.slide}>
              <RecordPad store={this.props.store}></RecordPad>

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
