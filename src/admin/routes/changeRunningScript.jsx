import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';

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
  }
};

class changeRunningScript extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {}
  componentWillMount() {}
  loadAuthRoute(){

  }
  render() {

    return (
      <div className=''>
        

      </div>
    )
  }
}
export default withRouter(changeRunningScript)
