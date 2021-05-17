function add(a, b) {
  return a + b;
}
//错误的姿势
exports = add;
//正确的姿势
moudle.exports = add;

moudle.exports = {
  skill: '百步飞剑',
};
// 重新建立 exports 和 module.exports 之间的引用关系
exports = module.exports;
exports.name = '盖聂';
