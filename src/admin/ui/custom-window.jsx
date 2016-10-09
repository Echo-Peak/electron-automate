import React from 'react';
let {Component} = React;
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import uuid from '../util/uuid';
import FlatButton from 'material-ui/FlatButton';
import WindowSettings from '../ui/windows-settings';

export default class CustomWindow extends Component{
  constructor(props){
    super();
    this.state = {
      userScripts:[],
      stylesheets:[],
      dialog:false,
      robotHeight:10,
      robotWidth:10,
      nodeIntegration:false,
      timeout:30,
      id:'',
      mediaType:{
        type:'custom'
      },
      dims:{
        scale:0.5,
        width:10,
        height:10,
        auto:true
      },
      pos:{
        x:0,
        y:0
      },
      deps:[],
      innerHTML:''
    };
  }
  componentDidMount(){
    sockets.Robot.on('robot-screen' ,(_screen)=>{
      let dims = this.state.dims;
      dims.width = _screen.width;
      dims.height = _screen.height;
      this.setState({dims ,robotHeight:_screen.height, robotWidth:_screen.width });
      });

      sockets.Robot.emit('get-robot-screen');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  add(prop){
    this.setState({ [prop]: this.state[prop].concat('')})
  }
  create(){
    console.log("creating custom BrowserWindow");
    let config = Object.assign({},this.state);
    config.timeout = config.timeout * 1000;
   sockets.Electron.emit('create-browser-window' ,uuid() ,'custom' ,config)
  }
  delete(prop , index){
    let o = this.state[prop];
    o[index] = '';
    o.splice(index ,1);
    this.setState({[prop]:o});
  }
  setWindowSettings(prop ,e ,value){
    let par = prop.split('/');
    let settings
    if(par.length > 1){
      settings = this.state[par[0]];
      settings[par[1]] = value;
    }else{
      console.log(par[0] ,value)
      this.state[par[0]] = value;
    }

   this.forceUpdate();
  }
  save(){
    sockets.fs.emit('save-window' , this.state)
  }
  render(){

    return (<div>
    <section style={{height:100}}>
       {(this.state.userScripts.length || this.state.deps.length || this.state.innerHTML.length) &&
         <RaisedButton label="create" primary={true}  onTouchTap={this.create.bind(this)}/> || null}
       {(this.state.userScripts.length || this.state.deps.length || this.state.innerHTML.length) && this.state.id.length &&
         <RaisedButton label="save" primary={true}  onTouchTap={this.save.bind(this)}/> || null}

          <RaisedButton label="add dependency" secondary={true} onTouchTap={this.add.bind(this ,'deps')}/>
          <RaisedButton label="add script" secondary={true} onTouchTap={this.add.bind(this ,'userScripts')}/>
          <RaisedButton label="add stylesheet" secondary={true} onTouchTap={this.add.bind(this,'stylesheets')}/>
          <RaisedButton label="settings" primary={true} onTouchTap={e => this.setState({dialog:true})}/>
    </section>
    <div style={{padding:20}}>
        <TextField hintText={`ID: `} onChange={e => this.setState({id:e.target.value})}/>
          <TextField
      multiLine={true}
      fullWidth={true}  hintText={`inner HTML`}
      onChange={e => this.state.innerHTML = e.target.value}/>
    </div>


    {this.state.deps.map((e ,i) => (
      <div style={{padding:20}} key={uuid()}>
      <TextField
        multiLine={true} defaultValue={e}
        fullWidth={true}  hintText={`Dependency - ${i}`}
        onChange={e => this.state.deps[i] = e.target.value}/>
      <FlatButton label="delete" secondary={true} onTouchTap={this.delete.bind(this,'deps' ,i)}/>
    </div>
    ))}

    {this.state.userScripts.map((e ,i) => (
      <div style={{padding:20}} key={uuid()}>
      <TextField
        multiLine={true} defaultValue={e}
        fullWidth={true}  hintText={`User Script - ${i}`}
        onChange={e => this.state.userScripts[i] = e.target.value}/>
      <FlatButton label="delete" secondary={true} onTouchTap={this.delete.bind(this,'userScripts' ,i)}/>
    </div>
    ))}

    {this.state.stylesheets.map((e ,i) => (
      <div style={{padding:20}} key={uuid()}>
      <TextField
        multiLine={true} defaultValue={e}
        fullWidth={true}  hintText={`User stylesheet - ${i}`}
        onChange={e => this.state.stylesheets[i] = e.target.value}/>
      <FlatButton label="delete" secondary={true} onTouchTap={this.delete.bind(this,'stylesheets' ,i)}/>
    </div>
    ))}

    <WindowSettings
      show={this.state.dialog} close={e => this.setState({dialog:false})}
      onChange={this.setWindowSettings.bind(this)}
      settings={this.state}></WindowSettings>
    </div>)
  }
}
