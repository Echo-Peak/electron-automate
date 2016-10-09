let _namespace = {
  init(){
    return this
  },
  mount(name){
    window[name] = _namespace
  }
}

export let namespace = Object.create(_namespace)
