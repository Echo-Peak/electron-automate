import React from 'react';
let {Component} = React;
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import uuid from '../util/uuid';
export default class Logs extends Component{
  constructor(props){
    super();
    this.state = {
      dialog:false,
      value:{},
      event:'',
      active:null,

    };
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  render(){
    const actions = [
   <FlatButton
     label="close"
     primary={true}
     onTouchTap={e => this.setState({dialog:false})}
   />
 ];
    let show = function(value){

      //this.setState({target:JSON.stringify(value)});
    }
    let hide = function(){
    //  this.setState({target:'false'});
    }
    return (<div>
      <List>
         {window.LOG.map((e ,index) =>(
           <div key={uuid()} style={{position:'relative'}}>
             <ListItem  primaryText={e.event} onTouchTap={f => this.setState({dialog:true , value:e.value , title:e.event})}></ListItem>
             <FlatButton
               secondary={true} label='view' style={{position:'absolute', top:0 ,right:0}}
                onClick={ f => this.setState({dialog:true , value:e.value , title:e.event})}></FlatButton>
           </div>
         ))}
       </List>

       <Dialog
         title={this.state.title}
         autoScrollBodyContent={true}
         actions={actions}
         modal={false}
         open={this.state.dialog}
         onRequestClose={e => this.setState({dialog:false})}>

         <pre>
           {JSON.stringify(this.state.value, null ,2)}
         </pre>
       </Dialog>
    </div>)
  }
}
