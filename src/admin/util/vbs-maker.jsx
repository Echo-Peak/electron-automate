import React from 'react';
let {Component} = React;
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RaisedButton from 'material-ui/RaisedButton';
let styles = {
  fab:{

    display:'inline-block'
    //position:'absolute'
  },
  input:{
    display:'inline-block'
  },
  textarea:{
    padding:20
  },
  radio:{
    padding:20,
    width:200
  }
}
export default class VBSMaker extends Component{
  constructor(props){
    super();
    this.state = {
      filename:'',
      body:'',
      type:'vbs'
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  saveVbs(){
    if(this.state.filename.length && this.state.body.length){
      console.log('saveing script' , this.state.filename , this.state.body)
      sockets.fs.emit('save-script',{value:this.state.body , name:this.state.filename ,type:this.state.type || 'vbs'})
    }else{
      alert('Did not save! filename or body was empty')
    }
  }
  setFilename(e){
    this.setState({filename:e.target.value})
  }
  setBody(e){
    this.setState({body:e.target.value})
  }
  changeType(e ,type){
    //console.log(e ,d)
    this.setState({type})
  }
  render(){
    return (<div>



      <TextField
        id='input'
        onChange={this.setBody.bind(this)}
        style={styles.textarea}
        fullWidth={true}
        multiLine={true}
        hintText="Script Editor"/>

      <section>
                 <TextField style={styles.input} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                   onChange={this.setFilename.bind(this)}
       hintText="save as"
       errorText="This field is required"
       floatingLabelText="Filename"
     /><br />

   <RadioButtonGroup name="script_type" defaultSelected="vbs" onChange={this.changeType.bind(this)} style={styles.radio}>
    <RadioButton value="cmd" label="cmd"/>
    <RadioButton value="vbs" label="vbs"/>
    <RadioButton value="bat" label="bat"/>
  </RadioButtonGroup>
  <span>Saveing as .<strong>{this.state.type}</strong></span>
  <RaisedButton label="save"  onTouchTap={this.saveVbs.bind(this)}/>
      </section>






    </div>)
  }
}
