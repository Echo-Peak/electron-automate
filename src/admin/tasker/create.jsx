import React from 'react';
let {Component} = React;
import RaisedButton from 'material-ui/RaisedButton';
import Interactive from './interactive';
import NONInteractive from './non-interactive';
import string_util from '../util/string';
const styles = {
  button:{

    margin: 12,
  }
};

export default class Create extends Component{
  constructor(props){
    super();
    this.state = {
      interactive:false
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  toggleInteractiveMode(){

  }
  render(){
    return (<div className='tasker-create'>
    <span>Interactive Mode: {string_util(this.state.interactive ,'toTitleCase')}</span>
     <RaisedButton label="create" style={styles.button} />
     <RaisedButton primary={true} label="interactive-mode"
       style={styles.button}
       onTouchTap={e => this.setState({interactive:!this.state.interactive})}/>
     {this.state.interactive ? <Interactive></Interactive> : <NONInteractive></NONInteractive>}
    </div>)
  }
}
