import React from 'react';
let {Component} = React;
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {List, ListItem} from 'material-ui/List';
import uuid from '../util/uuid';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FlatInput from '../ui/flat-input';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/alert/error';
import Dialog from 'material-ui/Dialog';

const styles = {
  errorStyle: {
    color: orange500,
  },
  button:{
    position:'absolute',
    right:0,
    top:0,
    height:'100%',
    width:150,
    fontWeight:'bold'
  },
  div:{
    position:'relative'
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  slide:{
    height:900
  }
};

export default class FileSystem extends Component{
  constructor(props){
    super();
    this.state = {
        slideIndex:0,
        cwd:null,
        root:null,
        currentDirlist:[],
        newDir:false,
        value:'',
        errors:[],
        dialog:false
    };

  }

  componentDidMount(){
    let self =this;
    sockets.fs.on('got-dirlist' ,function(newDirlist){

      let formated = newDirlist.list.map(function(item){
        let parts = item.split('.');

        if(parts.length > 1){
          return {path:item , type:'File'}
        }else{
          return {path:item , type:'Directory'}
        }
      });
      formated = formated.sort(function(a , b){
        return a.type === 'File'
      });
      if(self.state.root){
        self.setState({currentDirlist:formated , cwd:newDirlist.cwd});
        return
      }
      self.setState({currentDirlist:formated , cwd:newDirlist.cwd ,root:newDirlist.root})
    });

    sockets.fs.on('got-delete' ,function(dir){
      alert(`deleted ${dir}`)
    });

    sockets.fs.emit('get-root-dir');


    //opens dialog to show all errors!!!
    sockets.fs.on('fs-error' ,(error)=>{
      this.state.errors.push(error);
      this.setState({errors:this.state.errors})
    })
  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }

  handleChange(value) {
    this.setState({slideIndex: value})
  }
  changeDir(newDir){
    let dir = `${this.state.cwd}/${newDir.path}`;
    sockets.fs.emit('change-dir' ,dir );
    //console.log(dir)
  }
  root(){
    sockets.fs.emit('change-dir' ,this.state.root);
  }
  back(){
    let rootDir = this.state.root.split(/\\|\//g).pop();

    let path = this.state.cwd.split(/\\|\//g);

    // if(~path.indexOf(rootDir)){
    //
    //   console.log(path ,this.state.root ,rootDir ,this.state.cwd)
    //   return
    // }
    path.splice(path.length -1 ,1);
    let current = path.join('\\');

    sockets.fs.emit('change-dir' ,current );

  }
  deleteFile(dir){
    let _path = `${this.state.cwd}/${dir.path}`;
    let confirm = window.confirm(`delete this directory? THIS CANT BE UNDONE!! \n @${_path}`);

    if(confirm){
      sockets.fs.emit('delete-dir' ,{path:_path , cwd:this.state.cwd});
      //alert('process need be restarted to update changes')
    }
  }
  addFile(ev){
    let files = ev.target.files;
    let cFiles = Array.apply(0, files);
    let cc = 0;
    let totalSize = 0;
    let self = this;
    console.log(cFiles);

    cFiles.map(function(file ,index , arr){
    let reader = new FileReader();

    reader.onload = function(res){
      cc += 1;
      totalSize += file.size
      let filenameData = file.name.split('.');
      let ext = filenameData[filenameData.length - 1];
      let filename = filenameData[0];
      let text = res.target.result;
      sockets.fs.emit('dir-add-file' ,{name:filename ,ext:ext ,value:text , path:self.state.cwd});

    }
    reader.readAsBinaryString(file);
    });
  }
  newFile(){}
  toggleDir(){
    this.setState({newDir:!this.state.newDir})
  }
  newDir(){
    let exists = this.state.currentDirlist.filter(e => e.path === this.state.value);
    console.log(exists);

    if(exists.length){
      alert(`'${exists[0].path}' already exists!`);
      return
    }
    this.state.value.length && sockets.fs.emit('new-dir' ,{cwd:this.state.cwd ,value:this.state.value})
  }
  render(){
    const actions = [
      <FlatButton
        label="Clear"
        primary={true}
        onTouchTap={e => this.setState({errors:[]})}
      />,
      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onTouchTap={e => this.setState({dialog:false})}
      />,
    ];
    //let bold = e.type === 'Directory' ? {fontWeight:'bold'} : {}
    return (
      <div className='intros'>
            <span>Directory: {this.state.cwd}</span>
            <br></br>

            <FlatButton label='root' onTouchTap={this.root.bind(this)}></FlatButton>
            <FlatButton label='back' onTouchTap={this.back.bind(this)}></FlatButton>
            <RaisedButton secondary={true} label='new Directory' onTouchTap={this.toggleDir.bind(this)}></RaisedButton>
            <FlatInput raised={true} primary={true} accept='*'  label='new file' onChange={this.newFile.bind(this)}></FlatInput>

   <Badge
     badgeContent={this.state.errors.length}
     primary={true}
     badgeStyle={{top: 12, right: 12}}
     onTouchTap={e => this.setState({dialog:true})}
   >
     <IconButton tooltip="Errors">
       <NotificationsIcon />
     </IconButton>
   </Badge>

            {this.state.newDir && <section>
              <TextField hintText="type new directory name" onChange={e => this.setState({value:e.target.value})}/>
              <FlatButton label='add' onTouchTap={this.newDir.bind(this)}></FlatButton>
            </section>}

              <List>
                {this.state.currentDirlist.map((e ,index) => (
                  <div key={uuid()} style={styles.div}>
                    <ListItem
                    style={e.type === 'Directory' ? {fontWeight:'bold'} : {}}
                    primaryText={e.path}
                    secondaryText={e.type}
                    onTouchTap={this.changeDir.bind(this , e)}>
                  </ListItem>

                  <FlatButton  style={styles.button} secondary={true} label='delete' onTouchTap={this.deleteFile.bind(this ,e)}></FlatButton>
                  </div>
      ))}
            </List>

            <Dialog
                 title="errors"
                 actions={actions}
                 modal={false}
                 open={this.state.dialog}
                 onRequestClose={e => this.setState({dialog:false})}>
                 <List>
                   {this.state.errors.map(e =>(
                     <ListItem key ={uuid()} primaryText={e}></ListItem>
                   ))}
                 </List>
               </Dialog>
      </div>
    )
  }
}
