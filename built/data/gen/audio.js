let path = require('path');
module.exports = function(filename , volume ,ip ,port){

  let audioSrc = path.resolve(__dirname ,'../audio').split(/\\/g).join('/');
  let vol = typeof volume === 'number' && volume || 1;

  return `
  <html>
  <head>
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"><\/script>
  <\/head>
  <body>
    <audio id="audioSrc"><\/audio>
    <script>
      let elm = document.getElementById('audioSrc');
      let electron = io.connect('http://${ip}:${port}/electron');

        let src  = "${audioSrc}/${filename}";
        elm.src = src;
        elm.onloadeddata = function(){
          elm.volume = ${vol};
          elm.play();
        }

      electron.on('seek-audio' ,function(seekTo){
        elm.currentTime = seekTo;
      });
      electron.on('audio-action' ,function(action){
        switch(action){
          case 'pause':elm.pause();break;
          case 'play':elm.play();break;

        }
       });
       electron.on('change-volume' ,function(volume){
         elm.volume = volume;
        });


    <\/script>
  <\/body>
<\/html>
  `
}
