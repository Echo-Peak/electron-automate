import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import ConsoleShell from '../util/console-shell';
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color:'white'
  },

  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

class Shell extends Component {
  constructor(props) {
    super();
    this.state = {
      anchor:[]
    };
  }
  componentDidMount() {
    let self =this;
    sockets.System.on('shell-output',function(){
      setTimeout(function(){
        self.forceUpdate()
      },800)
    });
  }
  componentWillMount() {}
  loadAuthRoute(){

  }
  preview(){
    alert(this.refs.input.value.replace(/\n+?/gm,' '))
  }
  send(){
    let value = this.refs.input.value;
    let oneline = value.replace(/\n+?/gm,' ');
    this.refs.input.value = '';
    if(value.length){
      sockets.System.emit('shell-input',oneline);
    }
  }
  clear(){
    this.refs.input.value = '';
    this.refs.output.value = '';
    window.shellHistory = [];
    this.forceUpdate();
  }
  render() {

    let history = '';
    window.shellHistory.forEach(function(msg){
      history += msg +'\n';
    });
    return (
      <div className='SHELL' ref='shell'>

        <div className='container'>
          <section className='top'>
            <FlatButton label='Send' style={{color:'white'}} onTouchTap={this.send.bind(this)}></FlatButton>
            <FlatButton label='Clear' style={{color:'white'}} onTouchTap={this.clear.bind(this)}></FlatButton>
            <FlatButton label='Preview' style={{color:'white'}} onTouchTap={this.preview.bind(this)}></FlatButton>
          </section>

          <section className='input'>
            <textarea placeholder='input' ref='input'></textarea>
          </section>

          <section className='output'>
            <textarea placeholder='output' ref='output' value={history}></textarea>
          </section>
        </div>

      </div>
    )
  }
}
export default withRouter(Shell)
