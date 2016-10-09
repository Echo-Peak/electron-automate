import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';
export default class AppActions extends Component{
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
    return (<div>

      <FlatButton label='restart' />
    </div>)
  }
}
