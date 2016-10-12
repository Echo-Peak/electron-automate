import {observable , action ,computed} from 'mobx';
import uuid from '../util/uuid';

export default class BrowserWindowConfig{
  @observable width = 0;
  @observable height = 0;
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
  @observable x = null;
  @observable y = null;
  @observable id = '';
  @observable src = '';

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
  constructor(){

  }
}
