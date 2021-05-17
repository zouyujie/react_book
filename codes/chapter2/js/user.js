// 在user.js模块中导入模块skill
const skill = require('./skill');
// 调用skill模块中的taijiJian方法
skill.taijiJian();
skill.taijiQuan();
// 输出b模块中的wudang变量
console.log(skill.wudang);
// skill.xiangLong(); //报错
