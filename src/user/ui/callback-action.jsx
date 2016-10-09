import React from 'react';
let {Component} = React;
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import uuid from '../util/uuid'
const styles = {
  block: {
    //maxWidth: 250,
    //display:'inline-block'
  },
  radioButton: {
    marginBottom: 16,

    //
    // display:'inline'
  },

};


export default class CallbackAction extends Component{
  constructor(props){
    super();
    this.state = {
      current:null
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  execCommand(e ,index){
    this.props.queueCommand(this.props.commands[index] ,this.props.commands[index].code)
  }
  setCurrent(item ,code){

  }
  render(){
    return (<div>
      <RadioButtonGroup style={styles.root} name="callback" defaultSelected="none" onChange={this.execCommand.bind(this)}>
            <RadioButton
              value="none"
              label="none"
              style={styles.radioButton}
            />
          {this.props.commands.map((e ,i) =>(
            <RadioButton key={uuid()} value={i} label={e.cmd} style={styles.radioButton}></RadioButton>
          ))}
</RadioButtonGroup>
    </div>)
  }
}
