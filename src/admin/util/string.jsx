let props = {
  toTitleCase(str){
    return str.split(' ').map(e => e[0].toUpperCase() + e.substr(1)).join(' ');
  }
}

class String_error extends Error{
  constructor(msg){
    super();
    this.message = msg;
    this.name = 'String Error'
  }
}

export default function string_utility(str ,method){


  if(typeof method !== 'string'){
    throw new String_error(`expected arg2 to be a string. got '${typeof method}'`);
  }
  if(!Object.keys(props).includes(method)){
    throw new String_error(`'${method}' is not a function`);
  }

  return props[method](str.toString());
}
