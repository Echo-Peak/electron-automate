import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import debounce from '../util/debounce';

let styles = {
  border:{
    outline:'1px solid red',
    background:'#e0e0e0',
    margin:'0 auto',
    marginTop:10,
    position:'relative'
  },
  inner:{
    background:'#9e9e9e',
    outline:'1px solid blue',
    position:'absolute',
    top:0
  },
  toggle:{
    width:200
  }
}
@observer
export default class BrowserWindowPreview extends Component{
  constructor(props){
    super();
    this.state = {};
    this.listen = debounce(this.listener.bind(this) ,500)
  }
  componentDidMount(){
    window.addEventListener('resize',this.listen)
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.listen)
  }
  listener(){
    this.forceUpdate()
  }
  componentWillMount(){

  }

  render(){
    let x_window = this.props.store;

    let constantScale = 0.5;
    let screenWidth = (window.innerWidth / x_window.screenWidth) + window.innerWidth *0.5;
    let screenHeight= (window.innerHeight / x_window.screenHeight) + window.innerHeight *0.5;
    let width = x_window.width * constantScale * x_window.scale ;
    let height = x_window.height * constantScale * x_window.scale;

    let left = x_window.x * constantScale;
    let top = x_window.y * constantScale;

    let ifOutofBounds = (left + width > screenWidth || top + height > screenHeight) ? 'red' : 'orange';

    if(window.innerWidth < 700 ){
      screenWidth = screenWidth * 2;
    }

    return (
      <div className='browser-window-preview'>
        <div className='preview' style={{width:screenWidth , height:screenHeight ,outlineColor:ifOutofBounds}}>
          <span className='screen'>Host screen @ 50% scale. {x_window.screenWidth}x{x_window.screenHeight}</span>
          <div style={{...styles.inner , width:width, height:height ,top:top ,left:left}}>
            <span className='transform'>browser window</span>
          </div>
        </div>
        <div className='controls'>

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
        </div>
      </div>

  )
  }
}
