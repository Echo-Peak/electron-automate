import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';

let styles = {
  slide:{
    height:900
  }
}

export default class Tasker extends Component{
  constructor(props){
    super();
    this.state = {
      slideIndex:0,
      tasks:[]
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
  execTask(task){

  }
  render(){
    return (
      <div>
        <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
          <Tab label="runner" value={0}/>
          <Tab label="create" value={1}/>
          <Tab label="modify" value={2}/>
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
          <div style={styles.slide}>
            <List>
              {this.state.tasks.map(e => (<ListItem key={uuid()} primaryText={e} onTouchTap={this.execTask.bind(this,e)}>

            </ListItem>))}
          </List>
          </div>
          <div style={styles.slide}>
          </div>
          <div style={styles.slide}>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
