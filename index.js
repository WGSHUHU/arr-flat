'use strict'
function flat(arr, res) {
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i]
    if (Array.isArray(current)) {
      flat(current, res)
    } else {
      res.push(current)
    }
  }
  return res
}

module.exports = function(arr) {
  return flat(arr, [])
}
