let electron = require('electron');

//refrence to BrowserWindow_delagate , config to be used on 'BrowserWindow_delagate' at runtime


class BrowserWindow_config{
  constructor(window , socket, Sockets){
    this.window = window;
    this.Sockets = Sockets;
    this.socket = socket;

  }
  update(prop){
    //window properties that can be changed at runtime
    switch(prop){

    }


  }
}
module.exports = BrowserWindow_config
