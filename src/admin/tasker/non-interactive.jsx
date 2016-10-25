import React from 'react';
let {Component} = React;
export default class NonInteractive extends Component{
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
    return (<div></div>)
  }
}
