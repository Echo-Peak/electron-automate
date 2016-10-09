import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
export default class Logs extends Component{
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
    return (<div>
      <List>
         {window.LOG.map(e =>(
           <ListItem key={uuid()} primaryText={e.event} secondaryText={JSON.stringify(e.value)}></ListItem>
         ))}
       </List>
    </div>)
  }
}
