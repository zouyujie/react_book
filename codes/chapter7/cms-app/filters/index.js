const filter = (req, res, next) => {
  // 判断用户访问的是否是登录页面和用户当前的登录状态
  // 如果用户是登录状态将请求放行
  // 如果用户未登录将请求重定向到登录页面
  if (req.url != '/login' && !req.session.userInfo) {
    res.redirect('/login');
  } else {
    // 如果用户是登录状态 并且是一个普通用户
    if (req.session.userInfo.role == 'normal') {
      // 让它跳转到网站首页 阻止程序向下执行
      return res.redirect('/');
    }
    // 用户是登录状态 将请求放行
    next();
  }
};

module.exports = filter;
