Array.prototype.mySlice = function(start, end) {
  let arr = this
  start = start || 0
  end = end || arr.length
  const res = []
  for(let i = start; i < end; i++) {
    res.push(arr[i])
  }
  return res
}