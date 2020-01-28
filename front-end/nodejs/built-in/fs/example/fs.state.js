const fs = require('fs')

fs.stat('../example', (err, state) => {
  if (err) {
    return
  }
  console.dir(state)
})
// console.log(__dirname,__filename)