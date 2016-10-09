import React from 'react';
let {Component} = React;
import Snackbar from 'material-ui/Snackbar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Memory from 'material-ui/svg-icons/hardware/memory';
import History from 'material-ui/svg-icons/action/history';
import File from 'material-ui/svg-icons/file/file-download';

import Paper from 'material-ui/Paper';
import {withRouter} from 'react-router';


const styles = {

  bottomBar:{
    //position:'absolute',
    bottom:0,
    left:0,
    width:'100%'
  }
};


class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      msg: '',
      selectedIndex:2,
    };
  }
  componentDidMount() {

  }
  componentWillMount() {}
  handleRequestClose() {
    this.setState({open: false});
  }
  select(index){
    switch(index){
      case 0: this.props.router.push('');break;
      case 1: this.props.router.push('shell');break;
      case 2: this.props.router.push('logs');break;
      case 3: this.props.router.push('npm');break;
      case 4: this.props.router.push('app');break;
    }
    this.setState({selectedIndex:index});
  }
  onBack(){
    this.select(0);
    this.props.router.push('admin');
  }
  render() {
    let {state, props} = this;
    return (
      <div className='Layout'>

        <Paper zDepth={1} style={styles.bottomBar}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Back"
            icon={<ArrowBack style={{display:'inline-block'}}/>}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Shell"
            icon={<Memory style={{display:'inline-block'}}/>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="logs"
            icon={<History style={{display:'inline-block'}}/>}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="NPM"
            icon={<File style={{display:'inline-block'}}/>}
            onTouchTap={() => this.select(3)}
          />
          <BottomNavigationItem
            label="APP"
            icon={<File style={{display:'inline-block'}}/>}
            onTouchTap={() => this.select(4)}
          />
        </BottomNavigation>
        </Paper>
      {this.props.children}

      </div>
    )
  }
}
export default withRouter(Layout)
