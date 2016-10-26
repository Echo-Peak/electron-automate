module.exports = function(input){
  var k = input.split(/\n/).map(function(item){
  let name = item.match(/^([a-z0-9\-\!\._]+\s?)*/ig);
  let striped = item.replace(name[0] ,'').trim();
  striped = striped.match(/^([a-z0-9\-\!\.\\]+\s?)*/ig);
  return {
  name:name[0],
  user:striped[0]
  }
  });
  k.splice(0,1);
  return k
}
