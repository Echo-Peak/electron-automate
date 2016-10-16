import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import {observer} from 'mobx-react';
import uuid from '../util/uuid';

@observer
export default class SavedWindows extends Component{
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
  execIntro(){

  }
  render(){
    return (<div>

      <List>
        {this.props.store.saved.map((e ,index) => (
          <ListItem key={uuid()}
            primaryText={e.id}
            secondaryText={`Type: ${e.mediaType.type}, Frame:${e.frame} , width:${e.dims.width} - auto(${e.dims.auto}) , height:${e.dims.height} - auto(${e.dims.auto}) , timeout:${e.timeout}`}
            onTouchTap={this.execIntro.bind(this,index,e)}>

      </ListItem>))}
    </List>

    </div>)
  }
}
