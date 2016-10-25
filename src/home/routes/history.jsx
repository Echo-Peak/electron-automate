import React from 'react';
let {Component} = React;
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';

const styles = {
  dialog:{
    width: '100%',
    maxWidth: 'none',
    height:'80%'
  },
  messaages:{
    height:500,
    overflowY:'scroll',
    width:'100%'
  },
    errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  container:{
    position:'absolute',
    bottom:0,
    right:0,
    margin:10
  },
  input:{
    width:'100%'
  }

};

export default class History extends Component{
  constructor(props){
    super();
    this.state = {
      open:false,
      history:[{user:'admin' , ip:'192.168.23.1' , date: new Date()}]
    };

    sockets.System.on('update-history' ,(historyArr)=>{
      console.log(historyArr);
      this.setState({history:historyArr});
    });
    sockets.System.emit('get-history');
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  toggleHistory(bool){
    this.setState({open:bool})
  }
  render(){
    let actions = [
       <FlatButton
        label="close"
        primary={true}

        onTouchTap={this.toggleHistory.bind(this ,false)}
      />
    ];

    return (<div style={styles.container}>
        <div>
       <FlatButton backgroundColor='#EF5350' style={{color:'white'}} label="open History"  onTouchTap={this.toggleHistory.bind(this ,true)} />
       <Dialog
         title="History"
         actions={actions}
         modal={true}
         contentStyle={styles.dialog}
         autoScrollBodyContent={true}
         open={this.state.open}>

         <List>
           {this.state.history.map(e => (
             <ListItem key={uuid()} primaryText={e.user} secondaryText={`IP: ${e.ip}, DATE: ${e.date}`}/>
           ))}
         </List>


       </Dialog>
     </div>

    </div>)
  }
}
