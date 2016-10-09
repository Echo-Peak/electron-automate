import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import GreenLight from 'material-ui/svg-icons/av/fiber-smart-record';
import uuid from '../util/uuid';


export default class AppsRunning extends Component{
  constructor(props){
    super();
    this.state = {
      active:[],
      recent:[]
    };
    let self = this;

  }
  componentDidMount(){
    let self = this;
    mainSocket.on('history' ,function(list){
      console.log(list);
      if(list.active && list.recent){
            self.setState({
        active:list.active,
        recent:list.recent
      })
      }

    });
    console.log('sent')
    mainSocket.emit('get-history');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    return (<div className='apps' style={{height:300 ,color:'white'}}>
      <section className='active' style={{height:300, overflowY:'scroll'}}>
        <List >
          <Subheader style={{color:'white'}}>Active</Subheader>
          {this.state.active.map(e =>(
            <ListItem innerDivStyle={{color:'white'}} style={{color:'white'}} key={uuid()} primaryText={e.name}
                secondaryText={`@${e.port}`}
               leftIcon={<GreenLight color='limegreen'/>} />
          ))}
      </List>
      </section>
      <section className='recent' style={{background:'rgba(255,255,255,0.1)'}}>
        <List>
          <Subheader style={{color:'white'}}>Recent</Subheader>
            {this.state.recent.map(e =>(
              <ListItem style={{color:'white'}} key={uuid()} primaryText={e.name} secondaryText={new Date(e.date).toString()} />
            ))}
      </List>
      </section>

    </div>)
  }
}
