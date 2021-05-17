require('./a');
// 由于在 a中已经加载过b了
// 所以这里不会重复加载b
var fn = require('./b');
console.log(fn);
