module.exports = function(source,map,meta) {
  console.log(source,map,meta,this.data)
  return someSyncOperation(source)
}
// module.exports = function(content, map, meta) {
//   this.callback(null, someSyncOperation(content), map, meta);
//   return; // always return undefined when calling callback()
// };
function someSyncOperation(content) {
  console.log('test3')
  return content.replace(/(3)/,'test$1')
}
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log(remainingRequest, precedingRequest,'test3 pitch')
  data.value = 42;
};