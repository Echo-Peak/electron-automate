import React from 'react';
let {Component} = React;
import Controls from './controls';

export default class Shell extends Component{
  constructor(props){
    super();
    this.state = {
      help:[]
    };
  }
  componentDidMount(){
    console.error('shell currently disabled');
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    return (
      <div>
        <Controls></Controls>
    </div>
  )
  }
}
