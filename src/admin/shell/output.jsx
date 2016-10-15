import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';
import uuid from '../util/uuid';


let styles ={
  waiting:{
    color:'rgb(27, 143, 208)'
  },
  command:{
    color:'rgb(169, 64, 200)',
    fontSize:18,
    fontWeight:'bold'
  }
}
@observer
export default class Output extends Component{
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
    let store = this.props.store;

    return (<div className='shell-output'>
      <code>
        <ul>
          {store.history.map(e => (
            <div key={uuid()} className='shell-output-item'>
              <span style={styles.command}>Command: {e.command.toUpperCase()}</span>
              {e.waiting ? <pre style={styles.waiting}>Executing...</pre>: <pre>{e.result}</pre>}
            </div>
          ))}
        </ul>
      </code>
    </div>)
  }
}
