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
    height:'100%',
    transform:''
  },
  messaages:{
    height:500,
    overflowY:'scroll',
    width:'100%'
  },
  inputField:{
    height:100,

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
    left:0,
    margin:10
  },
  input:{
    width:'100%'
  }

};

export default class Chat extends Component{
  constructor(props){
    super();
    this.state = {
      msgs:[
      ],
      open:false,
    };
  }
  componentDidMount(){
    sockets.Chat.on('new-message' ,(newMsg)=>{
      console.log('yay',newMsg)
      this.state.msgs.push(newMsg);
      this.refs.msgScroll.scrollTop = this.refs.msgScroll.offsetHeight;
      this.setState({msgs:this.state.msgs});
    });

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  send(){
    let input = this.refs.input.input.refs.input;

    let name = window.internalAddress || 'Anoymonus';
    input.value.length && sockets.Chat.emit('send-message' ,{name:name ,msg:input.value})
    console.log(input.value ,{name:name ,msg:input.value});
    input.value = '';
  }
  toggleChatUI(bool){
    this.setState({open:bool})
  }
  render(){
    let actions = [
       <FlatButton
        label="close"
        primary={true}
        onTouchTap={this.toggleChatUI.bind(this ,false)}
      />
    ];
    return (<div style={styles.container}>
        <div>
       <RaisedButton label="open chat" secondary={true} onTouchTap={this.toggleChatUI.bind(this ,true)} />
       <Dialog
         title="Chat"
         actions={actions}
         modal={true}
         style={{position:'absolute' , top:'-2%'}}
         autoDetectWindowHeight={false}
         bodyStyle={{height:'100%' ,transform:''}}
         contentStyle={styles.dialog}
         onRequestClose={this.toggleChatUI.bind(this ,false)}
         open={this.state.open}>

         <section style={styles.messaages} ref='msgScroll'>
           <List>
             {this.state.msgs.map(e => (
               <ListItem key={uuid()} primaryText={<span style={{fontWeight:'bold'}}>{e.name.replace(/\:|f/g,'')}</span>} secondaryText={e.msg}/>
             ))}

         </List>
         </section>

         <section style={styles.inputField}>
           <TextField style={styles.input} multiLine={true} hintText="Write a message..."
             hintStyle={styles.errorStyle} ref='input' id='input'/>
           <br/>
           <RaisedButton label="send" primary={true} onTouchTap={this.send.bind(this)} />

         </section>
       </Dialog>
     </div>

    </div>)
  }
}
