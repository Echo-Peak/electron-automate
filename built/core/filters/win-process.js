module.exports = function(input){
var k = input.substr(250 ,input.length).split(/\n/).map(e => e.trim())
.map(function(item){
let segs = item.split(/\s{2}/g).filter( ss => ss.length)
try{
    let o = segs[1].split(' ').filter(kk => kk.length);

return{
  name:segs[0],
  pid:o[0],
  user:o[1],
  memory:segs[3]
}
}catch(e){
  return false
}
});
k.splice(0,1);
return k
}
