import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class ShellControls extends Component{
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
  send(){

  }
  clear(){

  }
  preview(){

  }
  render(){
    return (<div>
      <RaisedButton primary={true} label='Send' style={{color:'white'}} onTouchTap={this.send.bind(this)}></RaisedButton>
      <RaisedButton primary={true} label='Clear' style={{color:'white'}} onTouchTap={this.clear.bind(this)}></RaisedButton>
      <RaisedButton secondary={true} label='Preview' style={{color:'white'}} onTouchTap={this.preview.bind(this)}></RaisedButton>
    </div>)
  }
}
