module.exports = function(source) {
  return source.replace(/c\(([\s\S]*)\)/,"console.log($1)")
}