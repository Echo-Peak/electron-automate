import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import uuid from '../util/uuid';
import TextField from 'material-ui/TextField';
import Power from './power';
import Services from './services';
import Processes from './processes';
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color: 'white'
  },
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
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  },
  bottomBar:{
    position:'absolute',
    bottom:0,
    width:'100%'
  }
};

class System extends Component {
  constructor(props) {
    super();
    this.state = {
      slideIndex:0,
      filtered:[],
      system:[
        {name:'Shutdown' ,cmd:'Shutdown.exe -s -t 00'},
        {name:'Lock' ,cmd:'Rundll32.exe User32.dll,LockWorkStation'},
        {name:'Sleep' ,cmd:'rundll32.exe powrprof.dll,SetSuspendState 0,1,0'},
        {name:'Restart' ,cmd:'Shutdown.exe -r -t 00'}
      ],
      services:[],
      processes:[]
    };
  }
  componentDidMount() {
  }
  componentWillMount() {}
  handleChange(value) {
    this.setState({slideIndex: value})
  }

  select(index){
    this.setState({selectedIndex:index})
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
  execCommand(type ,cmd){
    console.log(type ,cmd)
    switch(type){
      case 'system':{
        sockets.System.emit('system-power' ,cmd.cmd)
      }break;
      case 'services':{

      }break;
      case 'processes':{
        let confirm = window.confirm(`kill ${cmd.name}?`);
        if(confirm){
          sockets.System.emit('taskkill' ,cmd.name)
        }
      }break;

    }
  }
  render() {

    return (
      <div className='system-action'>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="power" value={0}/>
            <Tab label="active-services" value={1}/>
            <Tab label="processes" value={2}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <Power></Power>
            </div>
            <div style={styles.slide}>
              <Services slide={this.state.slideIndex}></Services>
            </div>
            <div style={styles.slide}>
              <Processes slide={this.state.slideIndex}></Processes>
            </div>
          </SwipeableViews>
        </div>
      </div>
    )
  }
}
export default withRouter(System)
