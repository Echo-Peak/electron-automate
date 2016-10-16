import React from 'react';
let {Component} = React;
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import uuid from '../util/uuid';
import FlatButton from 'material-ui/FlatButton';
import WindowSettings from '../ui/windows-settings';
import {observer} from 'mobx-react';

let styles = {
  button:{
    margin:10
  },
  container:{
    width:'80%',
    textAlign:'center',
    margin:'0 auto'
  }

}

@observer
export default class CustomWindow extends Component{
  constructor(props){
    super();
    this.state = {
      userScripts:[],
      stylesheets:[],
      timeout:30,
      id:'',
      deps:[],
      innerHTML:''
    };
  }
  componentDidMount(){

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
  compare(){

    ~this.props.store.filenames.indexOf(this.state.id) ? this.setState({exists:true}) : this.setState({exists:false})
  }
  render(){
    let {deps ,userScripts ,innerHTML} = this.state;

    let ifExists = this.state.exists ? `${this.state.id} already exists! Overwrite?` : '';
    return (<div>
    <section style={styles.container}>
       {(userScripts.length || deps.length || innerHTML.length) &&
         <RaisedButton label="create" primary={true}  onTouchTap={this.create.bind(this)}/> || null}
       {(userScripts.length || deps.length || innerHTML.length) && this.state.id.length &&
         <RaisedButton label="save" primary={true}  onTouchTap={this.save.bind(this)}/> || null}

          <RaisedButton style={styles.button} label="add dependency" secondary={true} onTouchTap={this.add.bind(this ,'deps')}/>
          <RaisedButton style={styles.button} label="add script" secondary={true} onTouchTap={this.add.bind(this ,'userScripts')}/>
          <RaisedButton style={styles.button} label="add stylesheet" secondary={true} onTouchTap={this.add.bind(this,'stylesheets')}/>

    </section>
    <div style={{padding:20}}>
        <TextField  errorText={ifExists}
          hintText={`ID:(required) `}
          onChange={e => (this.state.id = e.target.value) && this.compare.call(this)}/>
          <TextField
      multiLine={true}
      fullWidth={true}  hintText={`inner HTML`}
      onChange={e => innerHTML = e.target.value}/>
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

    </div>)
  }
}
