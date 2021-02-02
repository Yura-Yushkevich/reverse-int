module.exports = function reverse (n) {
  const strArr = (''+n).split('');
  if(strArr[0] == '-'){
    strArr.shift();
  }
  return strArr.reverse().join('');
}