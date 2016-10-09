import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import ConsoleShell from '../util/console-shell';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import SmartStyle from '../util/smart-style';

SmartStyle('.text-output' ,{
  outline:'none',
  width:'100%',
  minHeight:300,
  background:'#222',
  padding:10,
  color:'white',
  resize:'none',
  '@Overide':{
    selection:{
      background:orange500
    }
  }
});

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color:'white'
  },
  input:{
    padding:10
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  },
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
    alert(this.refs.input.input.refs.input.value.replace(/\n+?/gm,' '))
  }
  send(){

    let value = this.refs.input.input.refs.input.value;
    let oneline = value.replace(/\n+?/gm,' ');
    this.refs.input.value = '';
    if(value.length){
      sockets.System.emit('shell-input',oneline);
    }
  }
  clear(){
    this.refs.input.input.refs.input.value = '';
    this.refs.input.input.refs.input.value = '';
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

        <div className='container-fluid'>
          <section >
            <RaisedButton primary={true} label='Send' style={{color:'white'}} onTouchTap={this.send.bind(this)}></RaisedButton>
            <RaisedButton primary={true} label='Clear' style={{color:'white'}} onTouchTap={this.clear.bind(this)}></RaisedButton>
            <RaisedButton secondary={true} label='Preview' style={{color:'white'}} onTouchTap={this.preview.bind(this)}></RaisedButton>
          </section>

          <section style={styles.input}>

              <TextField hintText="Input" rowsMax={8}  multiLine={true} fullWidth={true}

                 hintStyle={styles.errorStyle} ref='input' id="input"
                 autoComplete="off" autoCorrect="off"
                 autoCapitalize="off" spellCheck="false"
                 />
              <br />
          </section>

          <section className='output'>
            <textarea className='text-output' placeholder='output' ref='output' value={history} readOnly="readonly"></textarea>

          </section>
        </div>

      </div>
    )
  }
}
export default withRouter(Shell)
