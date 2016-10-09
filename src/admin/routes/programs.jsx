import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import ToggleUI from '../ui/toggle-ui';
import CircularProgress from 'material-ui/CircularProgress';

export default class Programs extends Component{
  constructor(props){
    super();
    this.state = {
      programs:[],
      loading:true,
    };
  }
  componentDidMount(){

    sockets.fs.on('programs' , (list)=>{
      this.setState({programs:list ,loading:false});
      console.log(list);
    })
    sockets.fs.emit('get-programs');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    return (<div>
      <ToggleUI show={this.state.loading} label='Generating programs list' icon={<CircularProgress />}></ToggleUI>
      <List>
        {this.state.programs.map(e =>{

          return <ListItem key={uuid()} primaryText={e.name} secondaryText={e.arch}></ListItem>
        })}
      </List>
    </div>)
  }
}
