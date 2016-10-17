import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import RaisedButton from 'material-ui/RaisedButton';

let styles = {
  slide:{
    height:900
  },
  button:{
    margin:12
  },
  controls:{
    position:'relative',
    width:'80%',
    margin:'0 auto'
  },
  delete:{
    position:'absolute',
    top:0,
    right:0,
    transform:'translateY(50%)'
  },
  listItem:{
    position:'relative'
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
    sockets.fs.on('tasker-list' ,(tasks)=>{
      this.setState({tasks})
    });
    sockets.fs.emit('get-tasker-list');
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
  deleteItem(filename ,item){
    console.log('deleteing' ,filename);
    let confirm = window.confirm(`delete ${item.id}?`);

    confirm && sockets.fs.emit('delete-task' ,filename)
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

            <div style={styles.controls}>
              <RaisedButton label="end" style={styles.button} />
              <RaisedButton label="preview" style={styles.button} />
            </div>

            <List>
              {this.state.tasks.map(e => (
                <div key={uuid()} style={styles.listItem}>
              <ListItem
              primaryText={e.id}
              secondaryText={e.descp}
              onTouchTap={this.execTask.bind(this,e)}>

            </ListItem>
            <RaisedButton secondary={true} label="delete" style={styles.delete} onTouchTap={this.deleteItem.bind(this, e.filename ,e)}/>
                </div>

          ))}
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
