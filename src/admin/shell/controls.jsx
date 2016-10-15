import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


let styles = {
  container:{
    width:'80%',
    position:'relative',
    margin:'0 auto',
    textAlign:'center'
  },
  button:{
    margin:10,
    color:'white'
  }
};
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
    switch(this.props.store.action){
      case 'command':  this.props.store.send_command(this.props.store.currentCommand);break;
      case 'url':  this.props.store.send_url(this.props.store.currentUrl);break;
    }

  }
  clear(){
    this.props.store.clear();
  }
  preview(){

    alert(this.props.store.currentCommand);
  }
  openUrl(){
    this.props.store.setOpenUrl(!this.props.store.openUrl);
  }
  render(){
    return (<div style={styles.container}>
      <RaisedButton primary={true} label='Send' style={styles.button} onTouchTap={this.send.bind(this)}></RaisedButton>
      <RaisedButton secondary={true} label='Clear' style={styles.button} onTouchTap={this.clear.bind(this)}></RaisedButton>
      <RaisedButton secondary={true} label='Preview' style={styles.button} onTouchTap={this.preview.bind(this)}></RaisedButton>
      <RaisedButton secondary={true} label='open url' style={styles.button} onTouchTap={this.openUrl.bind(this)}></RaisedButton>
    </div>)
  }
}
