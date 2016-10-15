import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';

export default class x_shell{
  @observable history = []
  @observable currentID = null;
  @observable currentCommand = '';
  @observable currentUrl = '';
  @observable openUrl = false;
  @observable action = '';
  @action setCommand(command){
    this.currentCommand = command
  }
  @action setAction(action){
    this.action = action;
  }
  @action setOpenUrl(bool){
    this.openUrl = bool;
  }
  @action setCurrentUrl(url){
    this.currentUrl = url;
  }
  @action clear(){
    this.history = [];
  }
  @action send_command(command){
    if(!command.length){ return}
    sockets.System.emit('shell-input',command);
    this.currentID = uuid();
    this.history.push({command:command , waiting:true ,result:'' ,id:this.currentID});
  }
  @action send_url(url){
    if(!url.length){ return}
    sockets.Electron.emit('shell-url',url);
    this.currentID = uuid();
    this.history.push({command:url , waiting:true ,result:'' ,id:this.currentID});
  }
  constructor(){
    sockets.System.on('shell-output', (c)=>{
        let getItem = this.history.filter(e => e.id === this.currentID);
        getItem[0].result = c;
        getItem[0].waiting = false;

    });
  }

}
