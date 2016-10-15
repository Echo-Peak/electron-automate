import React from 'react';
let {Component} = React;
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import debounce from '../util/debounce';
import {observer} from 'mobx-react';
let styles = {
    errorStyle: {
    color: blue500,
  },
  input:{
    padding:10
  }

}

@observer
export default class Input extends Component{
  constructor(props){
    super();
    this.state = {

    };
    this.keypress = debounce(this.keypreser.bind(this) ,500)
  }
  componentDidMount(){
    window.addEventListener('keydown' ,this.keypress);
  }
  componentWillUnmount(){
    window.removeEventListener('keydown' ,this.keypress);
  }
  componentWillMount(){

  }
  keypreser(e){
    switch(this.props.store.action){
      case 'command':e.key === 'Enter' && e.ctrlKey && this.props.store.send_command(this.props.store.currentCommand);break;
      case 'url':e.key === 'Enter' && e.ctrlKey && this.props.store.send_url(this.props.store.currentUrl);break;

    }
  }
  setValue(e){
    let oneliner = e.target.value.replace(/\n+?/gm,' ');
    this.props.store.setCommand(oneliner);


  }
  setUrl(e){
    this.props.store.setCurrentUrl(e.target.value);

  }
  render(){

    return (<div style={styles.input}>
      <span>*newlines will be replaced by spaces.</span>
      <TextField
        id='command'
        hintText="Input(ctrl + enter to Send)"
        rowsMax={8}
        multiLine={true}
        fullWidth={true}
         hintStyle={styles.errorStyle}
         autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck="false"
         onFocus={e => this.props.store.setAction(e.target.id)}
         onChange={this.setValue.bind(this)}
         />
       {this.props.store.openUrl && <TextField
         id='url'
         hintText="URL(ctrl + enter to Send)"
         fullWidth={true}
          hintStyle={styles.errorStyle}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          onFocus={e => this.props.store.setAction(e.target.id)}
          onChange={this.setUrl.bind(this)}
          />}
    </div>)
  }
}
