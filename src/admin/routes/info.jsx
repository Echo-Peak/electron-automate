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

export default class Info extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        netstat:[],
        waiting:true,
        env:[]
    };
    this.interval = null;
  }

  componentDidMount(){
        let self = this;

      sockets.System.on('got-netstat' ,(list)=>{
        this.setState({netstat:list ,waiting:false});
      });

      sockets.System.on('got-environment' ,(list)=>{
        this.setState({env:list});
      });

      sockets.System.emit('get-netstat');
      sockets.System.emit('get-environment');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  handleChange(value) {
    this.setState({slideIndex: value})
  }


  env(){
    return (<List>
    {this.state.env.map(e => (
      <ListItem key={uuid()} primaryText={e.key} secondaryText={e.value}></ListItem>
    ))}
  </List>)
  }
  render(){


    return (  <div>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="network" value={0}/>
            <Tab label="environment " value={1}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              {this.state.waiting && <span>Waiting....takes a few secs</span>}
              <List>
                {this.state.netstat.map(e =>(
                  <ListItem key={uuid()} primaryText={`${e.protocal} ${e.state}`} secondaryText={`Local: ${e.local} , ext: ${e.ext}`}></ListItem>
                ))}
              </List>
            </div>
            <div style={styles.slide}>
              {this.state.env.length ? this.env.call(this) : 'Cant get environment data'}


            </div>

          </SwipeableViews>
        </div>

      </div>)
  }
}
