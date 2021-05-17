const xiangLong = () => {
  console.log('降龙掌');
};
// 在模块内部定义方法
const taijiQuan = () => {
  console.log('太极拳');
};
const taijiJian = () => {
  console.log('太极剑');
};
const baiguZhua = () => {
  console.log('白骨爪');
};
// 在模块内部定义变量
const wudang = '武当派';

// 向模块外部导出数据
// exports.taijiQuan = taijiQuan;
// exports.taijiJian = taijiJian;
// exports.wudang = wudang;

// //另一种方式
// module.exports.taijiQuan = taijiQuan;
// module.exports.taijiJian = taijiJian;
// module.exports.wudang = wudang;

module.exports = {
  taijiQuan, //同名的时候可以简写
  taijiJian: taijiJian,
  wudang: wudang,
};
