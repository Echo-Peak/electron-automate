import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import PowerNew from 'material-ui/svg-icons/action/power-settings-new';
import ReportProblem from 'material-ui/svg-icons/action/report-problem';
import SettingsInput from 'material-ui/svg-icons/action/settings-input-component';


export default class App_UI extends Component{
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

  confirmify(prop){
    let confirm = window.confirm(`are you sure you want to execute '${prop}'?`);
    if(confirm){
      console.log(`sent system-${prop} event!`);
      window.LOG.push({event:'app-command-sent' ,value:prop});
      sockets.System.emit(`system-${prop}`);
    }

  }
  render(){
    const actions = [
    <RaisedButton
      label="ok"
      primary={true}
      onTouchTap={this.props.close} />
    ];

    return (<div>
      <Dialog
        title="APP"
        actions={actions}
        modal={false}
        open={this.props.show}
        onRequestClose={this.props.close}>
      <List>
       <ListItem primaryText="Restart App" leftIcon={<ReportProblem />} onTouchTap={this.confirmify.bind(this,'restart')}/>
       <ListItem primaryText="Restart robot-client" leftIcon={<ReportProblem />} onTouchTap={this.confirmify.bind(this,'restart-robot')}/>
       <ListItem primaryText="Kill robot-client" leftIcon={<SettingsInput />} onTouchTap={this.confirmify.bind(this,'kill-robot')}/>
       <ListItem primaryText="Terminate" leftIcon={<PowerNew />} onTouchTap={this.confirmify.bind(this,'terminate')}/>
     </List>
        </Dialog>
    </div>)
  }
}
