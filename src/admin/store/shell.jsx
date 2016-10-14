import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';

export default class x_shell{
  @observable history = []


  @action add(historyItem){
    this.history.push({command:historyItem.cmd , result:historyItem.result})
  }
  constructor(){

  }

}
