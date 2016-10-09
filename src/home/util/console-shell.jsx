import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';

export default class ConsoleShell extends Component{
  constructor(props){
    super();
    this.state = {};
    let self =this;
    ipcRenderer.on('console-shell-feedback',function(sender , result){


      self.refs.feedback.value = result.stderror || result.stdout;
    });
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  send(){
    let value = this.refs.textVal.value;
    let oneline = value.replace(/\n+?/gm,' ');
    oneline.length && ipcRenderer.send('console-shell' ,oneline);
  }
  clear(){
    this.refs.textVal.value = '';
    this.refs.feedback.value = '';
  }
  render(){

    let position = this.props.anchor;
    let display = this.props.show ? 'initial' :'none';
    let y = position[1]
    let x = position[0];
    if(this.refs.elm && position){
      x  =  x - this.refs.elm.offsetWidth;
      y  =  y - this.refs.elm.offsetHeight-50;
    }

    return (<div   className='console-shell' style={{display:display , position:'absolute' ,left:x , top:y}}>
    <div className='container' ref='elm'>
      <div className='feedback'>

        <textarea ref='textVal' placeholder='shell'></textarea>
        <textarea ref='feedback' placeholder='output'></textarea>
      </div>

      <footer>
        <FlatButton label='send' style={{color:'white'}} onTouchTap={this.send.bind(this)}></FlatButton>
        <FlatButton label='clear' style={{color:'white'}} onTouchTap={this.clear.bind(this)}></FlatButton>
        <FlatButton label='close' style={{color:'white'}} onTouchTap={this.props.close}></FlatButton>
      </footer>

    </div>

    </div>)
  }
}
