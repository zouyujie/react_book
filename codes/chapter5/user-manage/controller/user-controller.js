// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
// 人员信息集合
const User = require('../model/user');
// 引入模板引擎
const template = require('art-template');
// 引入querystring模块
const querystring = require('querystring');
// 用于处理url地址
const url = require('url');
const schools = require('../data/json.js');

// 添加人员信息页面
router.get('/add', (req, res) => {
  let html = template('add-user.art', {});
  res.end(html);
});
//删除人员
router.get('/delete', async (req, res) => {
  let { query } = url.parse(req.url, true);
  let id = query.id;
  console.log('id', id);
  let delRes = await User.findOneAndDelete({ _id: id });
  console.log(delRes);
  res.writeHead(301, {
    Location: '/list?d=' + new Date(), //刷新页面，改变url地址
  });
  res.end();
});
// 人员信息列表页面
router.get('/list', async (req, res) => {
  // 查询人员信息
  let users = await User.find();
  console.log(users);
  let html = template('list.art', {
    users: users,
    schools: schools,
  });
  res.end(html);
});
// 实现人员信息添加功能路由--接收post请求参数
router.post('/add', (req, res) => {
  let formData = '';
  req.on('data', (param) => {
    formData += param;
  });
  req.on('end', async () => {
    let item = querystring.parse(formData);
    // console.log('item', item);
    await User.create(item).catch((err) => {
      res.write(err.message);
    });
    res.writeHead(301, {
      Location: '/list',
    });
    res.end();
  });
});

module.exports = router;
