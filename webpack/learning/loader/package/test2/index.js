module.exports = function(source,map,meta) {
  console.log(source,map,meta)
  return someSyncOperation(source)
}
// module.exports = function(content, map, meta) {
//   this.callback(null, someSyncOperation(content), map, meta);
//   return; // always return undefined when calling callback()
// };
function someSyncOperation(content) {
  console.log('test2')
  return content.replace(/(2)/,'test$1')
}
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('test2 pitch')
  data.value = 42;
};