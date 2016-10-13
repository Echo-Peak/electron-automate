import React from 'react';
let {Component} = React;
import {observer} from 'mobx-react';

let styles = {
  border:{
    outline:'1px solid red',
    background:'#e0e0e0',
    margin:'0 auto',
    marginTop:10,
    position:'relative'
  },
  inner:{
    background:'#9e9e9e',
    outline:'1px solid blue',
    position:'absolute',
    top:0
  }
}
@observer
export default class BrowserWindowPreview extends Component{
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
    let x_window = this.props.store;
    console.log(x_window);
    let constantScale = 0.5;
    let width = x_window.width * constantScale * x_window.scale ;
    let height = x_window.height * constantScale * x_window.scale;

    let left = x_window.x * constantScale;
    let top = x_window.y * constantScale;

    //let xWindow =
    return (<div style={{...styles.border ,width:x_window.screenWidth*0.5 , height:x_window.screenHeight *0.5}}>
      <span>window @ 50% scale</span>
      <div style={{...styles.inner , width:width, height:height ,top:top ,left:left}}></div>
    </div>)
  }
}
