import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const styles = {
  button:{
    position:'absolute',
    right:0,
    top:0,
    height:'100%',
    width:150,
    fontWeight:'bold'
  },
  div:{
    position:'relative'
  }
};

export default class Processes extends Component{
  constructor(props){
    super();
    this.state = {
      ps:[],
      filtered:[]
    };
  }
  componentDidMount(){
    sockets.System.on('got-processes' ,(list)=>{
      this.setState({ps:list ,filtered:list})
    });
    sockets.System.emit('get-processes');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  setFilter(e){
    let value = e.target.value;

    if(!value.length){
      this.setState({filtered:this.state.processes});
    }else{
      let regex = new RegExp(`^${value}`,'ig');
      let filtered = this.state.processes.filter( e => regex.test(e.name));
      this.setState({filtered});
    }
  }
  kill(cmd){
    sockets.System.emit('taskkill' ,cmd.name)
  }
  render(){
    return (<div>
      <TextField hintText="Search process" onChange={this.setFilter.bind(this)}/>
{this.state.ps.map((e ,index) => (
    <div key={uuid()} style={styles.div}>
      <ListItem
      primaryText={`${e.name} - ${e.pid}`}
      secondaryText={`User: ${e.user}, Memory: ${e.memory}`}>
    </ListItem>

    <FlatButton  style={styles.button} secondary={true} label='kill' onTouchTap={this.kill.bind(this,e)}></FlatButton>
    </div>
    ))}
    </div>)
  }
}
