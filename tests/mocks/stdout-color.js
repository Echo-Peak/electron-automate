let colors = require('colors');
function stdoutColorify(msg){
  let id = msg.match(/^([\[A-Z\-\]]+)|^[A-Z\-]+/i); //must be case sensitive
  let newId = id ? id[0] : '';
  let ref = newId;
  let map = {
    MAIN:'cyan',
    LOG:'green',
    FATAL:'red',
    'SYSTEM-HANDLER':'magenta',
    SYSTEM:'red'
  }

  if(!(newId in map) || newId === ''){
    newId = 'MAIN';
  }
  console.log('->',ref)
  let newStdout = (ref in map) ? `[${newId[map[newId]]}]` : `[${newId[map[newId]]}] ${ref}`;

  return msg.replace(ref ,newStdout);
}

console.log(stdoutColorify('GET /home/Vendors.js 304 1.362 ms - -   '))
console.log(stdoutColorify('SYSTEM /home/Vendors.js 304 1.362 ms - -   '))
console.log(stdoutColorify(''))
console.log(stdoutColorify('robot pid'))
console.log(stdoutColorify('Event: js'))
