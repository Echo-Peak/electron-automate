import React from 'react';
let {Component} = React;
import FlatInput from '../ui/flat-input';
export default class Upload extends Component{
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
  save(){

  }
  render(){
    return (<div>
      <FlatInput
        raised={true}
        primary={true}
        label='upload window package'
        onChange={this.save.bind(this)}
        accept='*.html'></FlatInput>

    </div>)
  }
}
