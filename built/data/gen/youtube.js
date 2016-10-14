module.exports = function(opts ,IP , port){
  let {id , mute , seekTo  , timeout ,volume} = opts;

  return `
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.socket.io/socket.io-1.4.5.js"><\/script>

  <style media="screen">
    body,html{
      margin:0;
      padding:0;
    }
    body,html{
      margin:0;
      padding:0;
      overflow: hidden;
    }
    iframe{
      overflow: hidden;
      padding:0;
      margin:0;
    }

  <\/style>
<\/head>
  <body>
    <div id="player"></div>
    <script>
      let electron = io.connect('http://${IP}:${port}/electron');
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: window.innerHeight,
          width: window.innerWidth,
          videoId: '${id}',
          playerVars:{
            autoplay:1,
            controls:0,
            rel:0,
            showinfo:0,
            iv_load_policy:3
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      electron.on('audio-action' ,function(action){
        switch(action){
          case 'pause':player.pauseVideo();break;
          case 'play':player.playVideo();break;

        }
      });

      electron.on('seek-audio' ,function(seekTo){
        player.seekTo = seekTo;
      });

      electron.on('change-volume' ,function(volume){
        player.setVolume(volume*100)
      });

      function onPlayerReady(event) {
        event.target.playVideo();
      }


      var done = false;
      function onPlayerStateChange(event) {

        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, ${timeout});

          player.setVolume(${volume*100})
          ${mute && 'player.mute();' || '//'}
          player.seekTo(${seekTo});
          done = true;

        }
       }
      function stopVideo() {
        player.stopVideo();
      }
    <\/script>
  <\/body>
<\/html>
<\/html>
`
}
