import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
export default class Services extends Component{
  constructor(props){
    super();
    this.state = {
      srv:[],
      filtered:[]
    };
  }
  componentDidMount(){
    sockets.System.on('got-services' ,(list)=>{

      this.setState({srv:list , filtered:list});
    });
    sockets.System.emit('get-services');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  execCommand(){

  }
  render(){
    return (<div>
      <List>
        {this.state.srv.map(e => (
          <ListItem  key={uuid()}
            primaryText={e.name} secondaryText={e.user}
            onTouchTap={this.execCommand.bind(this ,e)}></ListItem>
        ))}
    </List>
    </div>)
  }
}
