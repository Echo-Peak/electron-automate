import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import {observer} from 'mobx-react';
import Divider from 'material-ui/Divider';
import {withRouter} from 'react-router';

let styles  = {
  toggle: {
    marginBottom: 16
  },
  button:{
    marginRight:10
  }
}

@observer
class BrowserWindowSettings extends Component{
  constructor(props){
    super();
    this.state = {};
    this.x_window = props.store

    window.xWindow = this.x_window;

  }
  componentDidMount(){
    sockets.Robot.on('robot-screen' ,(_screen)=>{
      this.x_window.setScreen(_screen.width , _screen.height);
    });
    sockets.Robot.emit('get-robot-screen');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  showPreview(){
    this.props.close();
    this.props.router.push('preview');
  }
  setProp(prop ,value){
    this.x_window.setProp(prop ,value);
  }
  render(){

    let {x_window} = this;
    const actions = [
      <RaisedButton
        label="ok" style={styles.button}
        primary={true}
        onTouchTap={this.props.close}
      />,
      <RaisedButton
        label="preview"  style={styles.button}
        secondary={true}
        onTouchTap={this.showPreview.bind(this)}
      />
];

    return (<div>
      <Dialog
        title="Browser Windows Settings"
        actions={actions}
        modal={false}
        open={this.props.show}
        onRequestClose={this.props.close}
        autoScrollBodyContent={true}>

        <span>pos-x: <strong>{x_window.x}</strong></span>
        <Slider name='pos-X' step={1} value={x_window.x} min={0} max={x_window.screenWidth}
          onChange={(e ,v) => x_window.setProp('x' ,v)}/>

        <span>pos-y: <strong>{x_window.y}</strong></span>
        <Slider name='pos-y' step={1} value={x_window.y} min={0} max={x_window.screenHeight}
          onChange={(e ,v) => x_window.setProp('y' ,v)}/>

        <span>width: <strong>{Math.floor(x_window.width * x_window.scale)}</strong></span>
        <Slider name='width' step={20} value={x_window.width} min={0} max={x_window.screenWidth}
          onChange={(e ,v) => x_window.setProp('width' ,v)}/>

        <span>height: <strong>{Math.floor(x_window.height * x_window.scale)}</strong></span>
        <Slider name='height' step={20} value={x_window.height} min={0} max={x_window.screenHeight}
          onChange={(e ,v) => x_window.setProp('height' ,v)}/>

        <span>scale-factor: <strong>{x_window.scale}</strong></span>
        <Slider name='scale-factor' step={0.01} value={x_window.scale} min={0} max={1} onChange={(e ,v) => x_window.setProp('scale' ,v)}/>

        <span>automaticly scale: </span>
        <Toggle label="auto" style={styles.toggle} onToggle={(f,e) => this.x_window.setProp('auto' ,e)}/>
        <Divider />
        <Toggle toggled={x_window.frame} label="frame" style={styles.toggle} onToggle={(f, e) => x_window.setProp('frame' ,e)}/>
        <Toggle toggled={x_window.center} label="center" style={styles.toggle} onToggle={(f, e) => x_window.setProp('center' ,e)}/>
        <Toggle toggled={x_window.alwaysOnTop} label="alwaysOnTop" style={styles.toggle} onToggle={(f, e) => x_window.setProp('alwaysOnTop' ,e)}/>
        <Toggle toggled={x_window.skipTaskbar} label="skipTaskbar" style={styles.toggle} onToggle={(f, e) => x_window.setProp('skipTaskbar' ,e)}/>
        <Toggle toggled={x_window.hasShadow} label="hasShadow" style={styles.toggle} onToggle={(f, e) => x_window.setProp('hasShadow' ,e)}/>
        <Toggle toggled={x_window.moveable} label="moveable" style={styles.toggle} onToggle={(f, e) => x_window.setProp('moveable' ,e)}/>
        <Toggle toggled={x_window.show} label="show" style={styles.toggle} onToggle={(f, e) => x_window.setProp('show' ,e)}/>

      </Dialog>
    </div>)
  }
}
export default withRouter(BrowserWindowSettings)
