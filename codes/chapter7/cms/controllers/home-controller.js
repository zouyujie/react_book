const { Article } = require('../models/article');
// 导入分页模块
const pagination = require('mongoose-sex-page');
// 导入评论集合构造函数
const { Comment } = require('../models/comment');

module.exports = {
  registerRoutes: function (app) {
    app.get('/', this.homeView);
    app.get('/article', this.articleDetailView);
    app.post('/add-comment', this.addComment);
  },
  //首页
  homeView: async (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }); //设置response编码为utf-8
    // 获取页码值
    const page = req.query.page;
    // 从数据库中查询数据
    let result = await pagination(Article)
      .page(page)
      .size(4)
      .display(5)
      .find()
      .populate('author')
      .exec();
    // res.send('欢迎来到网站首页')
    // 渲染模板并传递数据
    res.render('home/index.art', {
      result: result,
    });
  },
  //文章详情页
  articleDetailView: async (req, res) => {
    // 接收客户端传递过来的文章id值
    const id = req.query.id;
    // 根据id查询文章详细信息
    let article = await Article.findOne({ _id: id }).populate('author');
    // 查询当前文章所对应的评论信息
    let comments = await Comment.find({ aid: id }).populate('uid');
    // res.send('欢迎来到文章详情页面')
    res.render('home/article-detail.art', { article, comments });
  },
  //添加评论
  addComment: async (req, res) => {
    // 接收客户端传递过来的请求参数
    const { content, uid, aid } = req.body;
    // 将评论信息存储到评论集合中
    await Comment.create({
      content: content,
      uid: uid,
      aid: aid,
      time: new Date(),
    });
    // 将页面重定向回文章详情页面
    res.redirect('/article?id=' + aid);
  },
};
