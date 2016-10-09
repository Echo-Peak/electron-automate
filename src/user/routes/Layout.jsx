import React from 'react';
let {Component} = React;
import Snackbar from 'material-ui/Snackbar';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn/>;
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';
import {withRouter} from 'react-router';

const styles = {

  bottomBar:{
    //position:'absolute',
    position:'absol',
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
    // setInterval(function(){
    //   console.log(process.env)
    //
    // })
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
      case 2: this.props.router.push('shell');break;
      case 3: this.props.router.push('logs');break;
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
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Shell"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="logs"
            icon={nearbyIcon}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
        </Paper>
      {this.props.children}

      </div>
    )
  }
}
export default withRouter(Layout)
