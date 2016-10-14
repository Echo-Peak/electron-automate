let electron = require('electron');

//refrence to BrowserWindow_delagate , config to be used on 'BrowserWindow_delagate' at runtime
module.exports  = function(browserWindow ,socket, config){
  let screen = electron.screen.getPrimaryDisplay().workArea;
  let currentDims = {};

  socket.on('window-pos' ,function(pos){
    /* pos {
    x:<int>
    y:<int>
    auto:<boolean>
    scale:<int>
  }
    */
    browserWindow.setBounds({x:pos.x, y:pos.y, width:currentDims.width,height:currentDims.height});
  });

  socket.on('window-dims' ,function(dims){
    currentDims.width = dims.width;
    currentDims.height = dims.height;
    browserWindow.setSize(dims.width, dims.height);
  });

  socket.on('window-timeout' ,function(delay){
    setTimeout(function(){
      browserWindow.hide();
    },delay || 1000)
  });

  socket.on('window-toggle' ,function(bool){
    if(bool){
      browserWindow.show();
    }else{
      browserWindow.hide();
    }
  });
  socket.on('window-settings' ,function(settings){

  });
}
