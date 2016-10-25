import React from 'react';
let {Component} = React;
import uuid from '../util/uuid';
import {List, ListItem} from 'material-ui/List';

export default class Power extends Component{
  constructor(props){
    super();
    this.state = {
      options:['sleep' ,'lock' ,'sleep' ,'restart']
    };
  }
  execCommand(cmd){
    sockets.System.emit(`power-${cmd}`);
  }
  render(){
    return (<div>
      <List>
        {this.state.options.map(e => (
          <ListItem key={uuid()}  primaryText={e.name} onTouchTap={this.execCommand.bind(this, e)}></ListItem>
        ))}
      </List>
    </div>)
  }
}
