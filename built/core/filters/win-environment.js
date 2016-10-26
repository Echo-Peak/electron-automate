module.exports = function(input){
  let result = input.trim()
  .split(/\n+/g)
  .map(e => e.trim())
  .map(e => e.split('='))
  .map(e => ({key:e[0], value:e[1]}));

  return result
}
