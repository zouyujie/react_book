// const express = require('express');
// const user = express.Router();
// user.get('/', (req, res) => {
//   //设置response编码为utf-8
//   res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//   res.end('欢迎进入用户管理页面');
// });
// module.exports = user;
// module.exports = {
//   registerRoutes: function (app) {},
// };
// 导入用户集合构造函数
const { User, validateUser } = require('../models/user');
const bcrypt = require('bcryptjs'); //导入加密包
// const config = require('config');

module.exports = {
  registerRoutes: function (app) {
    app.get('/admin/user', this.userPage);
    // 用户编辑页面路由
    app.get('/admin/user/edit-view', this.editView);
    // 用户修改功能路由
    app.post('/admin/user/edit', this.edit);
    // 用户新增功能路由
    app.post('/admin/user/add', this.add);
    app.get('/admin/user/delete', this.delete);
  },
  //用户列表
  userPage: async (req, res) => {
    let { email, username } = req.query;
    // 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';
    // 接收客户端传递过来的当前页参数
    let page = req.query.page || 1;
    // 每一页显示的数据条数
    let pagesize = 10;

    let searchObj = {};
    if (username) {
      searchObj.username = username;
    }
    if (email) {
      searchObj.email = email;
    }

    // 查询用户数据的总数
    let count = await User.countDocuments(searchObj);
    // 总页数
    let total = Math.ceil(count / pagesize);
    // 页码对应的数据查询开始位置
    let start = (page - 1) * pagesize;
    // 将用户信息从数据库中查询出来--手动写分页
    let users = await User.find(searchObj).limit(pagesize).skip(start);

    res.render('admin/user', {
      users,
      page,
      total,
    });
  },
  //添加
  add: async (req, res, next) => {
    try {
      await validateUser(req.body);
    } catch (e) {
      // 验证没有通过
      // 重定向回用户添加页面
      return res.redirect(`/admin/user/edit-view?message=${e.message}`);
    }
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    // 如果用户已经存在 邮箱地址已经被别人占用
    if (user) {
      // 重定向回用户添加页面
      return res.redirect(
        `/admin/user/edit-view?message=用户名或邮箱地址已经被占用`
      );
    }
    // 对密码进行加密处理--生成随机字符串
    const salt = await bcrypt.genSalt(10);
    // 加密
    const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;
    // 将用户信息添加到数据库中
    await User.create(req.body);
    // 将页面重定向到用户列表页面
    res.redirect('/admin/user');
  },
  //编辑页面
  editView: async (req, res) => {
    // 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';
    // 获取到地址栏中的id参数
    const { id, message } = req.query;
    // 如果当前传递了id参数
    if (id) {
      // 修改操作
      let user = await User.findOne({ _id: id });
      // 渲染用户编辑页面
      res.render('admin/user/edit', {
        message: '修改用户',
        user: user,
        link: '/admin/user/edit?id=' + id,
        button: '修改',
        err: message,
      });
    } else {
      // 添加操作
      res.render('admin/user/edit', {
        message: '添加用户',
        link: '/admin/user/add',
        button: '添加',
        err: message,
      });
    }
  },
  //编辑
  edit: async (req, res, next) => {
    console.log(' req.body :>> ', req.body);
    // 接收客户端传递过来的请求参数
    const { username, email, role, state, password } = req.body;
    // 即将要修改的用户id
    const id = req.query.id;
    // 根据id查询用户信息
    let user = await User.findOne({ _id: id });
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
      // 将页面重定向到用户列表页面
      res.redirect('/admin/user');
    } else {
      // 密码比对失败
      return res.redirect(
        `/admin/user/edit-view?message=密码输入错误，不能进行用户信息的修改`
      );
      // next(JSON.stringify(obj));
    }
  },
  //删除
  delete: async (req, res) => {
    // 根据id删除用户
    const result = await User.findOneAndDelete({ _id: req.query.id });
    if (result) {
      // 将页面重定向到用户列表页面
      res.redirect('/admin/user');
    } else {
      //删除失败
    }
  },
};
