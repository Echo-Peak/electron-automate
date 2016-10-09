let fs = require('fs');
let keyboard = require('./keyboard-raw-v2');


let built = {};

let done = keyboard.map((item)=>{
  let secs = Object.keys(item);
  let _item = item[secs[0]];


  _item = _item.map(function(e ,index){

    //console.log(i)


      let eDone = e.cmd.split('+').map(e => e.trim());
        ~eDone.indexOf('$plus') && (eDone[eDone.indexOf('$plus')] = '+');


        return {cmd:eDone ,descp:e.descp}
  });


//console.log(_item , secs[0])
//console.log(cmdArr)
built[secs[0]]  = _item;
});

let okeys = Object.keys(done);
//console.log(JSON.stringify(built))
let convert = [];
let k = Object.keys(built).map(function(e){
  return {[e]:built[e]}
});

//console.log(k)
fs.writeFile('keyboard.json' ,JSON.stringify(k));
//console.log()
// var a = document.querySelectorAll(`div[compile="content"]`);
// var tables = Array.apply(null , content.querySelectorAll('table.table'));
// var compiled ={}
// var c = Array.apply(null,a[2].querySelectorAll('h3'));
// c = c.splice(c.length-1 ,1)
// c.pop()
// tables.forEach(function(table ,index){
// var name = c[index].innerText;
//
// var commands = Array.apply(0,table.querySelectorAll('tr')).map(function(cmds){
// let _cmd = cmds.children[0].innerText;
// let descp = cmds.children[1].innerText;
// console.log(_cmd ,'|||', descp , name)
// return {cmd:_cmd , descp}
// });
// done[name] = commands
//
// })
