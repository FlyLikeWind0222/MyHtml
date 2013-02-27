function chi2uni(str) {
  var chiRange = {start: 19968,end: 40869}//中文字符集：[\u4e00-\u9fa5] [19968-40869]
  var i, result, _i, _ref, _ref1;
  result = [];
  for (i = _i = 0, _ref = str.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    if ((chiRange.start <= (_ref1 = str.charCodeAt(i)) && _ref1 <= chiRange.end)) {
      result.push('\\u' + str.charCodeAt(i).toString(16));
    } else {
      result.push(str.charAt(i));
    }
  }
  return result.join('');
};
//test
console.log(chi2uni("你好"));
