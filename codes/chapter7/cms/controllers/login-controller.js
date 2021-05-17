const bcrypt = require('bcryptjs'); //导入加密包
// 导入用户集合构造函数
const { User, validateUser } = require('../models/user');
const config = require('config');

module.exports = {
  registerRoutes: function (app) {
    app.get('/login', this.loginPape);
    app.post('/login', this.login);
    app.get('/reigister', this.reigisterPage);
    app.post('/register', this.reigister);
    app.get('/logout', this.logout);
  },
  //登录-get
  loginPape: (req, res) => {
    req.app.locals.title = config.title;
    res.render('login');
  },
  //登录-post
  login: async (req, res) => {
    // 接收请求参数
    const { username, password } = req.body;
    console.log('object :>> ', username, password);
    const msg = '用户名或者密码错误';
    if (username.trim().length == 0 || password.trim().length == 0) {
      return res.status(400).render('admin/error', { msg });
    }
    //根据用户名查找用户信息
    let user = await User.findOne({ username });
    // 查询到了用户
    if (user) {
      /**
       * 将客户端传递过来的密码和用户信息中的密码进行比对
       * true 比对成功
       * false 对比失败
       */
      let isValid = await bcrypt.compare(password, user.password);
      // 如果密码比对成功
      if (isValid) {
        // 将用户信息存储在session对象中
        req.session.userInfo = user;
        //将用户信息存储到全局变量，所有模板可以直接访问
        req.app.locals.userInfo = user;
        // 对用户的角色进行判断
        if (user.role == 'admin') {
          // 重定向到用户列表页面
          res.redirect('/admin/user');
        } else {
          // 重定向到博客首页
          res.redirect('/');
        }
      } else {
        //用户名密码错误
        res.status(400).render('admin/error', { msg });
      }
    } else {
      // 没有查询到用户
      res.status(400).render('admin/error', { msg });
    }
  },
  //注册页面
  reigisterPage: (req, res) => {
    const { message } = req.query;
    res.render('register', { message });
  },
  //注册-post
  reigister: async (req, res) => {
    try {
      await validateUser(req.body);
    } catch (e) {
      // 验证没有通过
      // 重定向回用户添加页面
      return res.redirect(`/reigister?message=${e.message}`);
    }
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    // 如果用户已经存在 邮箱地址已经被别人占用
    if (user) {
      // 重定向回注册页面
      return res.redirect(`/reigister`);
    }
    // 对密码进行加密处理--生成随机字符串
    const salt = await bcrypt.genSalt(10);
    // 加密
    const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    req.body.password = password;
    // 将用户信息添加到数据库中
    await User.create(req.body);
    // 将页面重定向到首页
    res.redirect('/');
  },
  //退出登录
  logout: (req, res) => {
    // 删除session
    req.session.destroy(function () {
      // 删除cookie
      res.clearCookie('connect.sid');
      // 重定向到用户登录页面
      res.redirect('/login');
      // 清除模板中的用户信息
      req.app.locals.userInfo = null;
    });
  },
};
