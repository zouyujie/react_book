// 导入用户集合构造函数
const { User, validateUser } = require('../models/user');
const bcrypt = require('bcryptjs'); //导入加密包
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');

module.exports = {
  registerRoutes: function (app) {
    //用户列表
    app.post('/api/user/list', this.list);
    // 用户详情
    app.get('/api/user/detail', this.detail);
    // 用户修改
    app.post('/api/user/edit', this.edit);
    // 用户新增
    app.post('/api/user/add', this.add);
    //用户删除
    app.get('/api/user/delete', this.delete);
  },
  //用户列表
  list: async (req, res) => {
    let { email, username } = req.body;
    let pagerData = req.body.pagination;
    // console.log('object', req.body, req.body.pagination);
    // 接收客户端传递过来的当前页参数
    let page = pagerData ? pagerData.current : 1;
    let size = pagerData ? pagerData.pageSize : 10; // 每一页显示的数据条数

    let searchObj = {};
    if (username) {
      searchObj.username = username;
    }
    if (email) {
      searchObj.email = email;
    }
    // 将用户信息从数据库中查询出来
    let users = await pagination(User)
      .find(searchObj)
      .sort({ createTime: -1 }) //默认按照创建时间降序排列
      .page(page) // page 指定当前页
      .size(size) // size 指定每页显示的数据条数
      .display(7) // display 指定客户端要显示的页码数量
      .exec(); // exec 向数据库中发送查询请求

    let resData = { code: 200, data: users, msg: '' };
    return res.send(resData);
  },
  //添加
  add: async (req, res, next) => {
    let resData = { code: 200, data: {}, msg: '' };
    try {
      await validateUser(req.body);
    } catch (e) {
      console.log('e', e);
      // 验证没有通过
      resData.code = 500;
      resData.msg = '数据格式有误';
      return res.send(resData);
    }
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    // 如果用户已经存在 邮箱地址已经被别人占用
    if (user) {
      resData.code = 500;
      resData.msg = '用户已存在';
      return res.send(resData);
    }
    // 对密码进行加密处理--生成随机字符串
    const salt = await bcrypt.genSalt(10);
    // 加密
    const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;
    // 将用户信息添加到数据库中
    await User.create(req.body);
    return res.send(resData);
  },
  //详情
  detail: async (req, res) => {
    // 获取到地址栏中的id参数
    const { id, message } = req.query;
    let resData = { code: 200, data: {}, msg: '' };
    try {
      await validateUser(req.body);
    } catch (e) {
      // 验证没有通过
      resData.code = 500;
      resData.msg = '数据格式有误';
      return res.send(resData);
    }
    // 如果当前传递了id参数
    if (id) {
      // 修改操作
      let user = await User.findOne({ _id: id });
      resData.data = user;
    }
    return res.send(resData);
  },
  //编辑
  edit: async (req, res, next) => {
    console.log('req.body :>> ', req.body);
    // 接收客户端传递过来的请求参数
    const { username, email, role, state, password, id } = req.body;
    let resData = { code: 200, data: {}, msg: '' };
    // 根据id查询用户信息
    let user = await User.findOne({ _id: id });
    console.log('user', user);
    // 密码比对
    const isValid = await bcrypt.compare(password, user.password);

    // 密码比对成功
    if (isValid) {
      // res.send('密码比对成功');
      // 将用户信息更新到数据库中
      await User.updateOne(
        { _id: id },
        {
          username: username,
          email: email,
          role: role,
          state: state,
        }
      );
    } else {
      resData.msg = '密码比对失败';
      resData.code = 500;
    }
    return res.send(resData);
  },
  //删除
  delete: async (req, res) => {
    let resData = { code: 200, data: {}, msg: '' };
    // 根据id删除用户
    const result = await User.findOneAndDelete({ _id: req.query.id });
    if (result) {
      resData.msg = '删除成功';
    } else {
      //删除失败
      resData.msg = '删除失败';
      resData.code = 500;
    }
    return res.send(resData);
  },
};
