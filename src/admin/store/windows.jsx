import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';
import windowConfig from './browser-window-config';


export default class AudioStore{
  @observable saved = [];
  @observable filenames = [];

  @action setSaved(saved){
    this.saved = saved
  }


  constructor(){
    sockets.fs.on('window-list' ,(dirlist)=>{ //arr of browser window objs
    dirlist.forEach((_package)=>{
      let fromJSON = JSON.parse(_package);
      this.saved.push(fromJSON);
      this.filenames.push(fromJSON.id);
    })

    });

    sockets.fs.emit('get-window-list');
  }
}
