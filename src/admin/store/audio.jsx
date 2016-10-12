import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';
import windowConfig from './browser-window-config';


export default class AudioStore{
  @observable history = [];
  @observable current = null;
  @observable duration = 0;
  @observable elasped = 0;
  @observable seek = 0;
  @observable volume = 1;
  @observable mute = false;
  @observable isPlaying = false;
  @observable lastVolume = 1;
  @observable repeat = false;
  @observable status = '';
  @observable autoplay = true;
  @observable bytesReceived = 0;
  @observable totalBytes = 1;
  @observable internalPlayback = false;
  @observable elementREF = null;
  @observable blob_url = '';

  @action setInternalPlayback(bool){
    this.internalPlayback = bool;
  }
  @action setElementREF(HTMLAudioElement){
    this.elementREF = HTMLAudioElement;
  }
  @action setCurrent(value){
    this.current = value;
  }
  @action setBytesReceived(value){
    this.bytesReceived += value;
  }
  @action setTotalBytes(value){
    this.totalBytes = value;
  }
  @action setDuration(duration){
    this.duration = duration;
  }
  @action setAutoplay(bool){
    this.autoplay = bool;
  }
  @action setMute(bool){
    this.mute = bool;
    if(bool){
      this.lastVolume = this.volume;
      this.volume = 0;
    }else{
      this.volume = this.lastVolume;
    }
  }
  @action setSeek(value){
    this.seek = value;
  }
  @action setVolume(value){
    this.volume = value;
    this.lastVolume = value;
  }
  @action setIsPlaying(value){
    this.isPlaying = value;
  }
  @action setElapsed(value){
    this.elasped = value;
    if(this.internalPlayback){
      this.elementREF.currentTime = value;
    }
  }

  @action setRepeat(bool){
    this.repeat = bool;
  }

  @action next(){
    let nextTrack = this.history[0];
    if(!nextTrack){
      return
    }
    if(nextTrack === this.current){
      this.reset();
      return
    }
    console.log(nextTrack ,this.current ,'838');

    this.current = nextTrack;
    sockets.Electron.emit('create-audio-buffer' ,nextTrack);
  }

  @action queue(track){
    if(this.history.length >= 50){
      this.history.shift();
    }
    if(this.history.indexOf(track)){
      return
    }
    this.history.push(track);
  }

  @action startClock(){
    this.clock = setInterval(()=>{

      this.elasped += 1;
      if(this.elasped >= this.duration -2){
        if(this.repeat){

          this.createAudioBuffer(this.history[0]);
        }else{
          this.reset();
        }

        // if(!~this.history.indexOf(this.current)){
        //   //this.createAudioBuffer(this.history.shift());
        // }else{
        // }
      }
    },1000);
  }
  @action stopClock(){
    clearInterval(this.clock);
  }
  @action reset(){
    clearInterval(this.clock);
    this.current= '';
    this.elasped = 0;
    this.isPlaying = false;
    this.seek = 1;
    this.totalBytes = 1;
    this.bytesReceived = 0;
    this.duration = 0;
    this.elementREF.pause();
  }
  @action resetClock(){
    clearInterval(this.clock);
    this.elasped = 0;
  }

  @action createAudioBuffer(filename){
    this.reset();
    console.log("creating!!!!!" ,filename);
    sockets.Electron.emit('create-audio-buffer' ,filename);
    this.current = filename;
    if(!~this.history.indexOf(filename)){
      this.history.unshift(filename);
    }
  }

  @action createBrowserWindow(filename){

  }

  @action destroyBrowserWindow(filename){


  }

  constructor(){
    this.clock = null;
    this.config = new windowConfig();
    sockets.Electron.on('audio-buffer', (binaryString)=>{
      let element = this.elementREF;
      sockets.Electron.emit('create-browser-window' ,uuid() , 'audio' ,this.config.build('audio'));
      let buffer = new Uint8Array(binaryString.length);

      for(var i= 0; i< binaryString.length; i++){
        buffer[i] = binaryString.charCodeAt(i);

      }

      let blob = new Blob([buffer], {type:'audio/mp3'});
      this.blob_url = URL.createObjectURL(blob);

      element.onloadeddata  = (e)=>{
      this.setDuration(element.duration);

        if(this.internalPlayback){
          element.play()
        }
        if(this.autoplay){
          this.startClock();
          this.isPlaying = true;
        }else{
          this.isPlaying = false;
        }
      }
    });
  }
}
