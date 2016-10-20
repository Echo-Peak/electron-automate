import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {observer} from 'mobx-react';
import Player from '../player';

@observer
export default class PlayerDialog extends Component{
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

  render(){
    const actions = [
      <RaisedButton
        primary={true}
        label="ok"
        primary={true}
        onTouchTap={this.props.close}
      />
    ];
    return (<div>
      <Dialog
        title='Player'
        actions={actions}
        modal={false}
        open={this.props.show}
        onRequestClose={this.props.close}>

        <Player xStore={this.props.store}></Player>
          </Dialog>
    </div>)
  }
}
