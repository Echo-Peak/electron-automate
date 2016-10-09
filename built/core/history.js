let events = require('events');


let _history = [];
class History extends events{
  constructor(app){
    super();

      _history = app.locals.history = [];

  }
  find(path){
    //if a path does not = e.id in history then remove it
    let x = _history.filter(e => e.id !== path.replace('/',''));

    return x.length ? true : false;
  }
  add(item){
    _history.push(item);
    this.emit('foo' ,_history);
  }
  remove(id){
    if(_history.length){
      _history = _history.filter(e => e.id !== id);
      this.emit('foo' ,_history);
      return
    }
    //this.emit('error' ,'history is empty')
  }
  get(){
    return _history;
  }
}

let o;
module.exports = function(app){
  if(o){
    return o
  }else{
    o = new History(app);
    return o
  }
}
