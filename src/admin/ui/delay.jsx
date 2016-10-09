import React from 'react';
let {Component} = React;
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class Delay extends Component{
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
  setDelay(e){
    //this.props.setDelay()
    let text = e.target.innerText.trim().replace(/[^\d+]/g,'');
    this.props.setDelay(text);
    this.props.close()
  }
  render(){

    return (<div>
      <Popover
                open={this.props.show}
                anchorEl={this.props.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.props.close}
                animation={PopoverAnimationVertical}
              >
                <Menu>
                  <MenuItem primaryText="1000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="2000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="5000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="10000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="30000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="60000ms" onTouchTap={this.setDelay.bind(this)}/>
                  <MenuItem primaryText="120000ms " onTouchTap={this.setDelay.bind(this)}/>
                </Menu>
              </Popover>
    </div>)
  }
}
