let allowed = ['::1' ,'::ffff:127.0.0.1'];

for(var i = 1; i< 12; i++){
  allowed.push(`::ffff:192.168.1.${i}`);
}
module.exports = function(remoteAddress){
  return ~allowed.indexOf(remoteAddress) ? true : false;
}
