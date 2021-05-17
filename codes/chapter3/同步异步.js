// //同步
// console.log('第一关');
// console.log('第二关');

// console.log('第一关');
// //异步
// setTimeout(() => {
//   console.log('最后一关');
// }, 1000);
// console.log('第二关');

// fun函数定义
function fun(callback) {}
// fun函数调用
fun(() => {});

//同步
//获取当前日期
function getCurFormatDate() {
  var date = new Date();
  var seperator1 = '-';
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
const dt = getCurFormatDate();
console.log(dt); //2020-06-06

// 异步
function getMsg() {
  setTimeout(function () {
    return '每个人都是生活的导演';
  }, 1000);
}
const msg = getMsg();
console.log(msg); //undefined

// 同步，有序执行
const names = ['衍悔', '龙千山', '凌日'];
for (let name of names) {
  console.log(name);
}
console.log('遍历结束');
// 异步，无序执行
console.log('代码开始执行');
setTimeout(() => {
  console.log('1秒后执行的代码');
}, 1000);
setTimeout(() => {
  console.log('0秒执行的代码');
}, 0);
console.log('代码结束执行');
