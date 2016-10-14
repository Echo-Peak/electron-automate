import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import uuid from '../util/uuid';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import security from 'material-ui/svg-icons/hardware/security';
import toys from 'material-ui/svg-icons/hardware/toys';
import mouse from 'material-ui/svg-icons/hardware/mouse';
import gamepad from 'material-ui/svg-icons/hardware/gamepad';
import code from 'material-ui/svg-icons/action/code';
import pictureInPicture from 'material-ui/svg-icons/action/picture-in-picture';
import build from 'material-ui/svg-icons/action/build';
import swapVert from 'material-ui/svg-icons/action/swap-vert';
import movie from 'material-ui/svg-icons/av/movie';
import donutLarge from 'material-ui/svg-icons/action/donut-large';
import dashboard from 'material-ui/svg-icons/action/dashboard';
import desktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import phonelink from 'material-ui/svg-icons/communication/phonelink-setup';
import folder from 'material-ui/svg-icons/file/folder';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const mdColors =["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];
const styles = {

  largeIcon: {
    width: 60,
    height: 60,
    display:'inline-block'
  },

  large: {
    width: 120,
    height: 120,
    padding: 30
  },
  bottomBar:{
    position:'absolute',
    bottom:'0',
    width:'100%'
  },
  button:{
    height:100,
    width:'100%',

  }
};

class Admin extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedIndex:0
    };
  }
  componentDidMount() {

    //let permissions = window.host.permissions
    let actions = {
      'info':desktopWindows,
       'Shell':code,
        'file-system':folder,
        'system':phonelink,
       'Mouse':mouse,
       'Keyboard':gamepad ,
       'audio':movie,
        'scripts':security,
        'windows':pictureInPicture,
        'tasker':build
      }


    actions = Object.keys(actions).map(e => {
      let Icon = actions[e];
      let color = mdColors[Math.floor(Math.random()*mdColors.length)];
      let textColor = 'white';
      let switchTextColor = color.match(/[a-z0-9]{2}/gi).map(e => parseInt(e ,16))
      .reduce(function(start ,item){
        start += item;
        return start
      },0);

      if(switchTextColor >= 460){
        textColor = 'black';
      }
      return (<li key={uuid()}  className='action'>
      <div style={{margin:5 ,background:color}}>
        <IconButton iconStyle={{...styles.largeIcon, color:textColor}} style={styles.large}>
                <Icon />
              </IconButton>

              <FlatButton label={e} style={{...styles.button ,color:textColor}} onTouchTap={this.goto.bind(this,e)}/>
      </div>

          </li>)
    });

    this.setState({actions})
  }
  select(index){
    this.setState({selectedIndex: index});
  }
  goto(url){
    this.props.router.push(url.toLowerCase())
  }
  render() {


    return (
      <div className='admin-route'>
          <div className='admin-container'>
            <ul>
              {this.state.actions}
            </ul>
          </div>
      </div>
    )
  }
}
export default withRouter(Admin)
