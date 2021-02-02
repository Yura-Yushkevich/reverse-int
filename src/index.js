module.exports = function reverse (n) {
  strArr = (''+n).split('');
  return strArr.reverse().join('');
}