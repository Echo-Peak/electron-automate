import React from 'react';
let {Component} = React;
import FlatButton from 'material-ui/FlatButton';

let styles = {
  input:{
    opacity:0,
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex:2,
    cursor:'pointer'
  }
}
export default class FlatInput extends Component{
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
  streamData(onchange , e){
    let file = ev.target.files[0];
    let reader = new FileReader();
    let name = file.name;
    let self = this;
    console.log("streaming");
    reader.onload = function(res){
      let data = res.target.result;
          console.log("streaming" ,data.length);
      onchange(data);
    }
    reader.readAsBinaryString(file);
  }
  render(){

    let stream = this.props.stream ? this.streamData.bind(this, this.props.onChange) : this.props.onChange;
    let input  = (
      <input accept={this.props.accept}
        multiple
        style={styles.input}
        type={this.props.type}
        onChange={stream}
        />);

    return (<div>
      <FlatButton label="Select File" children={input} style={{color:'white' ,cursor:'pointer'}}/>
    </div>)
  }
}
