import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';
import debounce from '../util/debounce';

export default class BrowserWindowConfig{
  @observable width = 1;
  @observable height = 1;
  @observable auto = true;
  @observable scale = 1;
  @observable center = true;
  @observable alwaysOnTop = true;
  @observable skipTaskbar =  true;
  @observable title =  '';
  @observable hasShadow = true;
  @observable frame = false;
  @observable moveable = false;
  @observable show = false;
  @observable timeout = 1000;
  @observable ignoreTimeout = false;
  @observable type = '';
  @observable x = 0;
  @observable y = 0;
  @observable id = '';
  @observable src = '';
  @observable screenWidth = 50;
  @observable screenHeight = 50;
  @action build(mediaType){
    let built = {
      id:uuid(),
      title:this.title,
      center:this.center,
      frame:this.frame,
      ignoreTimeout:this.ignoreTimeout,
      timeout:this.timeout,
      show:this.show,
      skipTaskbar:this.skipTaskbar,
      mediaType:{
        src:this.src || mediaType,
        type:this.type
      },
      dims:{
        width:this.width,
        height:this.height,
        auto:this.auto,
        scale:this.scale
      },
      pos:{
        x:this.x,
        y:this.y
      }
    }
    return built
  }
  @action setProp(prop ,value){
    this[prop] = value;
    this.delayAction(prop ,value);
  }
  @action setScreen(width ,height){
    this.screenWidth = width;
    this.screenHeight = height;
  }
  constructor(){
    this.delayAction = debounce(this.setAction ,1000);
  }
  setAction(prop){
    let bw = {
      prop:'',
      args:[]
    }
    //temp code! will be done on the backend!
    console.log('setting' ,prop)
    switch(prop){
      case 'x':{
        bw.prop = 'setPosition';
        bw.args = [this.x , this.y]
      };break;
      case 'y':{
        bw.prop = 'setPosition';
        bw.args = [this.x , this.y]
      }break;
      case 'show':{
        this.show ? (bw.prop = 'show') : (bw.prop = 'hide');

      }break;
      case 'width':{
        bw.prop = 'setSize';
        bw.args = [this.width , this.height]

      }break;
      case 'height':{
        bw.prop = 'setSize';
        bw.args = [this.width , this.height]

      }break;

    }
    if(bw.prop && bw.args){

      sockets.Dynamic.emit('update-browser-window' ,bw.prop ,bw.args)
    }
  }
}
