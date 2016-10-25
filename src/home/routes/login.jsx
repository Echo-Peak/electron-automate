import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import Chip from 'material-ui/Chip';
import Chat from './chat';
import History from './history';
import uuid from '../util/uuid';
const randIcon = [<Pets/> , <AccountCircle/> , <Supervisor/>];
import FlatInput from '../ui/flat-input';
import ActionAndroid from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
  chip:{
    position:'absolute',
    top:10,
    margin:20
  },
  largeIcon: {
    width: 60,
    height: 60,
    color:'white'
  },

  large: {
    width: 120,
    height: 120,
    padding: 30
  },
  textField:{
    color:'white'
  }
};


class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      isAuthed:false,
      toggle:false,
      toast:false,
      users:[],
      pageID:'',
      who:{
        name:'',
        ip:null
      },
      msg:'',
      value:'',
      waiting:false
    };
    let self = this;
    sockets.System.on('spawned-app' ,function(spawnUrl){
      if(window.internalAddress === spawnUrl.ip){
        self.setState({pageID:spawnUrl.id});
        alert(`you have access to /${spawnUrl.id} '${spawnUrl.role}'`)
      }
      console.log(spawnUrl);
    });
    sockets.Crypto.on('status' ,function(status){

      if(status.status){

      }else{
        console.log(status);
        alert('rejected')
      }
    })

  }
  componentDidMount(){
    let users = window.host.roles.split(',').map((user)=>{

      return (
        <div className='user' key={uuid()} onTouchTap={this.setWho.bind(this,user)}>
          <div className='icon-button'>
                <IconButton iconStyle={styles.largeIcon} style={styles.large}>
          {randIcon[Math.floor(Math.random()*randIcon.length)]}
        </IconButton>
          </div>


        <div className='button'>
          <FlatButton label={user} style={{color:'white'}} />
        </div>


    </div>
      )
    });
    this.setState({users});
  }
  setValue(e){
    this.setState({value:e.target.value})
  }
  handleRequestClose(){
    this.setState({toast:false})
  }
  handleFile(e){
    e.persist();
    let self = this;
    let files = e.target.files;
    let safeFiles = Array.apply(null , files)
    .filter(e => /^secret\.txt|key\.txt/.test(e.name)).sort((a ,b) => a.name - b.name);
    let done = {};
    let count = 0;
    if(!safeFiles.length){
      e.target.value = '';
      return
    }
    safeFiles.forEach(function(fileObj ,index , arr){
      let reader = new FileReader();
      reader.onload = function(e2){
        count += 1;
        let result = e2.target.result;
        done[fileObj.name.split('.')[0]] = result;
        if(count === arr.length){
          if(done.secret && done.key){
            sockets.Crypto.emit('check', done.secret , done.key,self.state.who );

            e.target.value = '';
          }else{
            //e.target.value = '';
            alert('rejected')
          }

        }
      }
      reader.readAsText(fileObj)
    });

  }
  setWho(who){
    this.setState({who:{name:who , ip:window.internalAddress}})
  }

  render() {

    return (
      <div className='login-container'>

        <div className='inner-container'>
          <div  className='user-container'>

          {this.state.users}

        </div>

        <br></br>


        <div className ='info'>
          <label style={{color:'white'}}>Add key file</label>
          <h3 style={{color:'white', textAlign:'center'}}>{this.state.who.name} {this.state.who.ip}</h3>

          {this.state.who.name && this.state.pageID && <FlatButton
            label={`go to /${this.state.pageID}`}
            href={`http://${window.host.ip}:${window.host.port}/${this.state.pageID}`}
            secondary={true}
            icon={<ActionAndroid/>}
            />}
          {this.state.who.name && <FlatInput accept='.txt' multiple type='file' onChange={this.handleFile.bind(this)}></FlatInput>}
        </div>

        </div>

        <div className='bottom'>
          <Chat></Chat>
          <History></History>
        </div>

      </div>
    )
  }
}
export default withRouter(Login)
