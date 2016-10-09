import CookieParser from './cookie';
import {$ev} from './event-emitter';
class Auth{
  constructor(){
  this.queue = [];
  this.provider = null;
  this.cookie = new CookieParser();
  this.currentUser = null;
  this.cachedUser = false;
  }
  makeProvider(provider){
    let _provider;
    switch(provider){
      case 'google':{ _provider = new firebase.auth.GoogleAuthProvider(); _provider.addScope('https://www.googleapis.com/auth/plus.login') } break;
      case 'twitter':{ _provider = new firebase.auth.TwitterAuthProvider();} break;
      case 'facebook':{ _provider = new firebase.auth.FacebookAuthProvider();} break;
    }
    return _provider
  }
  credProvider(provider , token){
    let _provider;
    switch(provider){
      case 'google':{ _provider = firebase.auth.GoogleAuthProvider.credential(token); } break;
      case 'twitter':{ _provider = firebase.auth.TwitterAuthProvider.credential(token);} break;
      case 'facebook':{ _provider = irebase.auth.FacebookAuthProvider.credential(token);} break;
    }
    return _provider
  }
  makeUserSlot({uid , provider , displayName , avatar , joined}){
    firebase.database().ref('users').child(uid)
    .set({joined, provider, displayName, avatar});
  }
  oauth_signin(withProvider){
    let provider = this.makeProvider(withProvider);
    firebase.auth().signInWithPopup(provider).then(e =>{
      let slot = {
        uid:e.user.uid,
        avatar:e.user.photoURL || 'res/blog/no-avatar.svg',
        displayName:e.user.displayName,
        provider:withProvider,
        joined:Date.now()
      }
      this.provider = withProvider;
      this.makeUserSlot(slot);
      this.update(slot);
      this.cache_credentails(e.credential.accessToken ,e.credential.tokenId);
      $ev.emit('login' ,e);
      this.currentUser = e;
    }).catch( err => {
      console.log('sigend in')
      this.update(false ,err);
    });
    return this.DONE.bind(this)
  }
  cache_credentails(token , id){
   this.cookie.set('provider' ,this.provider, 72);
  this.cookie.set('token' ,token ,72);
   this.cookie.set('id' ,id ,72);
  }
  re_login(){

    let provider = this.credProvider(this.cookie.get('provider') , this.cookie.get('token'));
    firebase.auth().signInWithCredential(provider).then(e =>{
      this.update(e);
      this.currentUser = e;
      $ev.emit('login' ,e);
      console.log('sigend in')
    })
    .catch(err =>{
      console.log('sigend in')
      this.update(false , e)
    });
    return this.DONE.bind(this);
  }
  update(){
    this.queue[0]([...arguments]); //first index must be indicitve of the state of being logged in or not
    this.queue.shift();
  }
  DONE(callback){

  if(typeof callback !== 'function'){
      return
    }
    this.queue.push(callback);
  }
  isAuthed(){
    return firebase.auth().currentUser ? true : false;
  }
  getAuth(){
    return firebase.auth().currentUser;
  }
  unauth(){
    firebase.auth().signOut();
  }
  pollAuth(callback){
    if(this.cachedUser){
       callback(true , this.cachedUser)
      return
    }
    let trys =0;
    let poll = function(){
      trys += 1;
      let currentUser = firebase.auth().currentUser;
      if(currentUser){
        this.cachedUser = currentUser;
        callback(true , currentUser);
        return;
      }else if(trys >= 20){
        this.cachedUser = false;
        callback(false);
        return;
      }
    }
    //console.log("POLLING");
    setTimeout(poll ,500);
  }
}
let auth = new Auth();
export let authenticator = auth
