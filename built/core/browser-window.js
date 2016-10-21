let electron = require('electron');

class BrowserWindow_config{
  constructor(window , socket, Sockets){
    this.window = window;
    this.Sockets = Sockets;
    this.socket = socket;
    this.screen = electron.screen.getPrimaryDisplay().workArea;
  }
  update(prop ,args){
    //window properties that can be changed at runtime
    let props = ['show' ,'hide'];
    if(props.includes(prop)){
      this.Sockets.logger.emit('re-broadcast' ,{type:'log' ,event:'updateing BrowserWindow prop' ,value:prop});
      window[prop](...args);

    }else{
      this.Sockets.logger.emit('re-broadcast' ,{type:'fail' ,event:'can not update BrowserWindow prop' ,value:prop})
    }
  }

}
module.exports = BrowserWindow_config
