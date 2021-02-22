
exports.min = function min(array) {
  return !array || array.length == 0 ? 0 : Math.min(...array)
}

exports.max = function max(array) {
  return !array || array.length == 0 ? 0 : Math.max(...array)
}

exports.avg = function avg(array) {
  if (!array || array.length == 0) return 0
  let sum = 0
  for (item of array) {
    sum += item
  }
  return sum / array.length
}
