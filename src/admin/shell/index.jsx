import React from 'react';
let {Component} = React;
import Controls from './controls';
import Input from './input';
import Output from './output';

export default class Shell extends Component{
  constructor(props){
    super();
    this.state = {
    };
  }
  componentDidMount(){
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  render(){
    let store = this.props.store;

    return (
      <div className='shell-container'>
        <Controls store={store}></Controls>
        <Input store={store}></Input>
        <Output store={store}></Output>
    </div>
  )
  }
}
