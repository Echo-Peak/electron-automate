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
import swapVert from 'material-ui/svg-icons/action/swap-vert';
import movie from 'material-ui/svg-icons/av/movie';
import donutLarge from 'material-ui/svg-icons/action/donut-large';
import dashboard from 'material-ui/svg-icons/action/dashboard';
import desktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const mdColors =['#EF5350' ,'#EC407A','#AB47BC','#7E57C2','#5C6BC0','#2196F3' ,'#0097A7' ,'#EF6C00' ,'#FF5722'];
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
  bottomBar:{
    position:'absolute',
    bottom:'0',
    width:'100%'
  },
  button:{
    height:100,
    width:'100%',
    color:'white'
  }
};

class Admin extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedIndex:0
    };
  }
  componentDidMount() {}
  componentWillMount() {}
  loadAuthRoute(){

  }
  select(index){
    this.setState({selectedIndex: index});
  }
  goto(url){

    this.props.router.push(url.toLowerCase())
  }
  render() {
    let actions = {
      'info':desktopWindows,
       'Mouse':mouse,
       'Keyboard':gamepad ,
       'audio':movie,
        'Intros':code

      }


    actions = Object.keys(actions).map(e => {
      let Icon = actions[e];
      let color = mdColors[Math.floor(Math.random()*mdColors.length)];
      return (<li key={uuid()} style={{background:color}}>
      <div className='icon'>
        <IconButton iconStyle={{...styles.largeIcon}} style={styles.large}>
                <Icon />
              </IconButton>
      </div>

          <FlatButton label={e} style={styles.button} onTouchTap={this.goto.bind(this,e)}/>
          </li>)
    });

    return (
      <div className='admin-route'>
        <header></header>
        <div>
          <div className='actions-container'>
            <ul>
              {actions}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Admin)
