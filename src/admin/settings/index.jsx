import React from 'react';
let {Component} = React;
import Player_UI from './player';
import BrowserWindow_UI from './browser-window';
import App_UI from './app';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Computer from 'material-ui/svg-icons/hardware/computer';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
import More from 'material-ui/svg-icons/navigation/more-horiz';

import SettingsApplications from 'material-ui/svg-icons/action/settings-applications';

import {observer} from 'mobx-react';

let styles = {
  button:{
    margin:10,
    position:'fixed',
    bottom:0,
    zIndex:8000,
    right:0
  }
};

//@observer
export default class Settings extends Component{
  constructor(props){
    super();
    this.state = {
      popover:false,
      app:false,
      browserWindow:false,
      player:false
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    let stores = this.props.store;
    return (<div>
      <FloatingActionButton
        
        style={styles.button} title='open settings'
        onTouchTap={e => this.setState({popover:true ,anchorEl:e.currentTarget})}>
        <More />
      </FloatingActionButton>

      <Popover

    open={this.state.popover}
    anchorEl={this.state.anchorEl}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    onRequestClose={e => this.setState({popover:false})}>
    <Menu>
      <MenuItem primaryText="Browser window" leftIcon={<Computer />}
        onTouchTap={e => this.setState({browserWindow:true, popover:false})}/>

      <MenuItem primaryText="Player" leftIcon={<Equalizer />}
         onTouchTap={e => this.setState({player:true ,popover:false})}/>

       <MenuItem primaryText="APP" leftIcon={<ActionHome />} onTouchTap={ e => this.setState({app:true ,popover:false})}/>
    </Menu>
  </Popover>

  <BrowserWindow_UI
    store={stores.browserWindow}
    show={this.state.browserWindow}
    close={e => this.setState({browserWindow:false})}>
  </BrowserWindow_UI>

  <Player_UI
    store={stores.audio}
    show={this.state.player}
    close={e => this.setState({player:false})}></Player_UI>

  <App_UI

      show={this.state.app}
      close={e => this.setState({app:false})}></App_UI>
    </div>)
  }
}
