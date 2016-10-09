import React from 'react';
let {Component} = React;
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import uuid from '../util/uuid';
import {List, ListItem} from 'material-ui/List';

const styles = {
  button:{
    position:'absolute',
    top:0,
    right:0
  }
}


export default class npmUI extends Component{
  constructor(props){
    super();
    this.state = {
      value:'',
      save:true,
      isInstalled:null,
      packages:[],
      status:''
    };
  }
  componentDidMount(){
    sockets.System.on('packageJSON', (packageJSON)=>{
      let json = JSON.parse(packageJSON);
      let deps = Object.keys(json.dependencies);
      this.setState({packages:deps});
      console.log(packageJSON)
    });
    sockets.System.on('npm-status', (status)=>{
      console.log(status);
      this.setState({status:status.value})
    });
    sockets.System.emit('get-packageJSON');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  toggleDeps(){
    this.setState({save:!this.state.save});
  }
  setValue(e){
    this.setState({value:e.target.value});
  }
  install(){
    let isInstalled = ~this.state.packages.indexOf(this.state.value);
    let opts = {package:this.state.value , installed:isInstalled , save:this.state.save};
    console.log(opts);
    sockets.System.emit('npm-install',opts);
    alert('app need to be restarted for these changes to take affect');
  }
  uninstall(_package){
    console.log('uninstalling',_package)
    sockets.System.emit('npm-uninstall',_package);
    alert('app need to be restarted for these changes to take affect');
  }
  restart(){
    let confirm = window.confirm('restart app?');
    if(confirm){
      sockets.System.emit('restart');
    }
  }
  render(){
    let isInstalled = ~this.state.packages.indexOf(this.state.value) ? 're-install' : 'install';
    return (<div>
      <div>
      <TextField
            onChange={this.setValue.bind(this)}
            hintText="install npm module"
          /><br />
        <Checkbox label="add to dependancies?" checked={true} onCheck={this.toggleDeps.bind(this)}/>
        <FlatButton label={isInstalled} primary={true} onTouchTap={this.install.bind(this)}/>
      </div>
          <section>
            <h4>installed</h4>
          <List>

            {this.state.packages.map(e => (
              <div key={uuid()} style={{position:'relative'}}>
                <ListItem primaryText={e}/>
                <FlatButton label="uninstall" secondary={true} onTouchTap={this.uninstall.bind(this ,e)} style={styles.button}/>
              </div>
            ))}
        </List>
          </section>

        <section>
          <h4>status</h4>
          <p>{this.state.status}</p>
        </section>
        <section>
          <FlatButton label='restart' primary={true} onTouchTap={this.restart.bind(this)}/>
        </section>
    </div>)
  }
}
