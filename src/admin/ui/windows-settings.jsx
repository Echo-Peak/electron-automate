import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
export default class WindowsSettings extends Component{
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
    const actions = [
   <FlatButton
     label="ok"
     primary={true}
     onTouchTap={this.props.close}
   />
 ];
  let settings =this.props.settings;
  let setValue = this.props.onChange;

    return (
      <Dialog
          title="window settings"
          actions={actions}
          modal={false}
          open={this.props.show}
          autoScrollBodyContent={true}
          onRequestClose={this.props.close}>
          <section>
            <span>timeout: {settings.timeout} seconds </span>
            <Slider style={{width:'80%' ,margin:'0 auto'}}
              step={1} value={settings.timeout} min={1} max={600} onChange={setValue.bind(this,'timeout')}/>

            <span>Scaling: {settings.dims.scale}</span>
            <Slider style={{width:'80%' ,margin:'0 auto'}}
              step={0.05} value={settings.dims.scale} min={0.1} max={1} onChange={setValue.bind(this,'dims/scale')}/>

            <span>Width: {settings.dims.width}</span>
              <Slider style={{width:'80%' ,margin:'0 auto'}}
                step={1} value={settings.dims.width} min={1} max={settings.robotWidth} onChange={setValue.bind(this,'dims/width')}/>

              <span>Height: {settings.dims.height}</span>
              <Slider style={{width:'80%' ,margin:'0 auto'}}
                step={1} value={settings.dims.height} min={1} max={settings.robotHeight} onChange={setValue.bind(this,'dims/height')}/>

              <span>X Cord: {Math.floor(settings.robotWidth * settings.pos.x)}</span>
                <Slider style={{width:'80%' ,margin:'0 auto'}}
                  step={0.01} value={settings.pos.x} min={0} max={1} onChange={setValue.bind(this,'pos/x')}/>

                <span>Y Cord: {Math.floor(settings.robotHeight * settings.pos.y)}</span>
              <Slider style={{width:'80%' ,margin:'0 auto'}}
                step={0.01} value={settings.pos.y} min={0} max={1} onChange={setValue.bind(this,'pos/y')}/>
          </section>
        </Dialog>)
  }
}
