import React from 'react';
let {Component} = React;
import {withRouter} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Supervisor from 'material-ui/svg-icons/action/supervisor-account';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Pets from 'material-ui/svg-icons/action/pets';
import Chip from 'material-ui/Chip';
//import AppsRunning from './apps-running';
import uuid from '../util/uuid';
const randIcon = [<Pets/> , <AccountCircle/> , <Supervisor/>];
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

// function deleteAllCookies() {
//     var cookies = document.cookie.split(";");
//
//     for (var i = 0; i < cookies.length; i++) {
//     	var cookie = cookies[i];
//     	var eqPos = cookie.indexOf("=");
//     	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//     	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
//     }
// }

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      isAuthed:false,
      toggle:false,
      toast:false,
      users:[],
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
      alert(`you have access to /${spawnUrl.id} '${spawnUrl.role}'`)
      console.log(spawnUrl);
    });
    sockets.Crypto.on('status' ,function(status){
      //deleteAllCookies()
      //document.cookie = `u=${status.who.displayName};path=/`;
      console.log(status)
      if(status.status){
        console.log(status)
      }else{
        console.log(status);
        alert('rejected')
      }
    })
    // mainSocket.on('got-key' ,function(key){
    //   //spawns a new process and closes this one
    //   if(key.status){
    //     alert(`key accepted: process started @local :${key.port}`);
    //   }else{
    //     alert(`key rejected`)
    //   }
    //
    //
    // });
    // mainSocket.on('log' ,function(log){
    //   console.log(log)
    //
    // });
    // firebase.database().ref('users').once('value' ,(snapshot)=>{
    //   let data = snapshot.val();
    //   let users = Object.keys(data);
    //   let f = users.map(e => ({name:e, key:users[e]}) );
    //   this.setState({users:f});
    //   console.log(f)
    // });
  }
  componentDidMount(){
    let users = ['admin' ,'user','guest','e-guest'].map((user)=>{

      return (
        <div className='admin' key={uuid()}>
      <div>
        <IconButton iconStyle={styles.largeIcon} style={styles.large}>
          {randIcon[Math.floor(Math.random()*randIcon.length)]}
        </IconButton>
      </div>

      <FlatButton label={user} style={{color:'white'}} onTouchTap={this.setWho.bind(this,user)}/>
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
            console.log(0,done)
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
      <div className='login'>

        <div style={{position:'relative', top:100}}>
          <div className='flex' >
          {this.state.users}

        </div>
              <label style={{color:'white'}}>Add key file</label>
        <br></br>
        <h3 style={{color:'white'}}>{this.state.who.name} {this.state.who.ip}</h3>

        {this.state.who.name && <input accept='.txt' multiple type='file' style={{color:'white'}} onChange={this.handleFile.bind(this)}></input>}
        </div>



      </div>
    )
  }
}
export default withRouter(Login)
