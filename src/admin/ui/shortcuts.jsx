import React from 'react';
let {Component} = React;
import uuid from '../util/uuid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Shortcuts extends Component{
  constructor(props){
    super();
    this.state = {
      expanded:false
    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
  exec(cmd){
    let mods = ['alt' ,'shift' ,'control' ,'command'];
    let filterMods = cmd.filter(e => ~mods.indexOf(e));
    let filterKey = cmd.filter(e => !~mods.indexOf(e));
    sockets.Robot.emit('robot-keyToggle',{key:filterKey[0] , delay:this.props.hold()*1000 ,mod:filterMods});


  }
  toggle(bool){
    this.setState({expanded:bool})
  }
  shouldComponentUpdate(){
    return true
  }
  render(){
    let label = this.props.section;
    let content = this.props.content;
    //console.log(content)
    return (<div>
      <Card expanded={this.state.expanded}>
  <CardHeader
    title={label}
    actAsExpander={true}
    showExpandableButton={true}
  />
  <CardActions>
    <FlatButton label="close" primary={true} onTouchTap={this.toggle.bind(this ,false)}/>
    <FlatButton label="show" primary={true} onTouchTap={this.toggle.bind(this ,true)}/>
  </CardActions>
  <CardText expandable={true}>
    <ul className='keyboard-shortcuts'>
    {content && content.map(e => (
      <div key={uuid()} onTouchTap={this.exec.bind(this , e.cmd)}>
        <h4>{e.cmd.join(' + ')}</h4>
        <br/>
        <span>{e.descp}</span>
      </div>
    ))}
  </ul>
  </CardText>
</Card>

    </div>)
  }
}
