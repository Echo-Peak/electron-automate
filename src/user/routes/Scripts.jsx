import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import VBSMaker from '../util/vbs-maker';
import uuid from '../util/uuid';

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color:'white'
  },

  large: {
    width: 120,
    height: 120,
    padding: 30
  },
  slide:{
    height:900
  }
};

class Scripts extends Component {
  constructor(props) {
    super();
    this.state = {
      slideIndex:0,
      presets:[]

    };
  }
  componentDidMount() {
    let self = this;
    console.log('sent ss')


    sockets.fs.on('got-scripts',function(data){
      console.log(128,data);
      self.setState({presets:data})
    });
    sockets.fs.emit('get-scripts');
  }
  execScript(file){
    sockets.System.emit('exec-script',file);
    console.log("exicuteuung" , file);
  }
  componentWillMount() {}
  handleChange(value) {
    this.setState({slideIndex: value})
  }
  render() {

    return (
      <div className=''>
        <div>
          <Tabs onChange={this.handleChange.bind(this)} value={this.state.slideIndex}>
            <Tab label="presets" value={0}/>
            <Tab label="create" value={1}/>
          </Tabs>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div style={styles.slide}>
              <List>
                {this.state.presets.map(e => (<ListItem key={uuid()} primaryText={e} onTouchTap={this.execScript.bind(this,e)}>

              </ListItem>))}
            </List>
            </div>
            <div style={styles.slide}>
            <VBSMaker></VBSMaker>
            </div>
          </SwipeableViews>
        </div>

      </div>
    )
  }
}
export default withRouter(Scripts)
