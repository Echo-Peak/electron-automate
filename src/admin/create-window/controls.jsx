import React from 'react';
let {Component} = React;
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let styles ={
  fab:{
    marginRight: 20
  },
  controls:{
    position:'fixed',
    bottom:0,
    right:50,
    margin:10,
    zIndex:8200
  }
}
export default class Controls extends Component{
  constructor(props){
    super();
    this.state = {
      dialog:false
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  create(){

  }
  render(){
    const actions = [
      <FlatButton
        label="close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={e => (!this.setState({dialog:false}) && this.create.call(this))}
      />
    ];

    return (<div style={styles.controls}>
      
      <FloatingActionButton style={styles.fab} onTouchTap={e => this.setState({dialog:true})}>
          <Dashboard />
        </FloatingActionButton>
        <Dialog
          title="Create a browser window"
          actions={actions}
          modal={false}
          open={this.state.dialog}
          onRequestClose={e => this.setState({dialog:false})}>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
    </div>)
  }
}
