// const express = require('express');
// const article = express.Router();

// article.get('/', (req, res) => {
//   //设置response编码为utf-8
//   res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
//   res.end('欢迎进入文章管理页面');
// });
// module.exports = {
//   registerRoutes: function (app) {
//   }
// }
// 将文章集合的构造函数导入到当前文件中
const { Article } = require('../models/article');
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');
// 引入formidable第三方模块
const formidable = require('formidable');
const path = require('path');

module.exports = {
  registerRoutes: function (app) {
    app.get('/admin/article', this.articlePage);
    app.get('/admin/article/edit-view', this.editView);
    app.post('/admin/article/add', this.add);
    app.post('/admin/article/edit', this.edit);
    app.get('/admin/article/delete', this.delete);
    app.post('/admin/article/browerServer', this.uploadImg);
  },
  articlePage: async (req, res) => {
    // 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    // 接收客户端传递过来的页码
    let { title, page } = req.query;
    //条件查询
    let searchObj = {};
    if (title) {
      searchObj.title = title;
    }
    // 查询所有文章数据
    let articles = await pagination(Article)
      .find(searchObj)
      .page(page) // page 指定当前页
      .size(2) // size 指定每页显示的数据条数
      .display(3) // display 指定客户端要显示的页码数量
      .populate('author')
      .exec(); // exec 向数据库中发送查询请求
    // 渲染文章列表页面模板
    res.render('admin/article', {
      articles: JSON.parse(JSON.stringify(articles)),
    });
  },
  editView: async (req, res) => {
    req.app.locals.currentLink = 'article';
    const { id } = req.query;
    // console.log('id :>> ', id);
    if (id) {
      let article = await Article.findOne({ _id: id });
      console.log('article :>> ', article);
      res.render('admin/article/edit.art', {
        message: '修改文章',
        article: article,
        button: '修改',
        link: '/admin/article/edit?id=' + id,
      });
    } else {
      res.render('admin/article/edit.art', {
        message: '创建文章',
        button: '添加',
        link: '/admin/article/add',
      });
    }
  },
  //添加
  add: async (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', 'public', 'uploads');
    // console.log('form.uploadDir :>> ', form.uploadDir);
    // 3.保留上传文件的后缀
    form.keepExtensions = true;

    // 4.解析表单
    form.parse(req, async (err, fields, files) => {
      // 1.err错误对象 如果表单解析失败 err里面存储错误信息 如果表单解析成功 err将会是null
      // 2.fields 对象类型 保存普通表单数据
      // 3.files 对象类型 保存了和上传文件相关的数据
      // res.send(files.cover.path.split('public')[1])
      console.log('add');
      await Article.create({
        title: fields.title,
        author: fields.author,
        publishDate: fields.publishDate,
        cover: files.cover.path.split('public')[1],
        content: fields.content,
      });
      // 将页面重定向到文章列表页面
      res.redirect('/admin/article');
    });
    // res.send('ok');
  },
  //编辑
  edit: async (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname, '../', 'public', 'uploads');
    // console.log('form.uploadDir :>> ', form.uploadDir);
    // 3.保留上传文件的后缀
    form.keepExtensions = true;
    const id = req.query.id;

    // 4.解析表单
    form.parse(req, async (err, fields, files) => {
      // 1.err错误对象 如果表单解析失败 err里面存储错误信息 如果表单解析成功 err将会是null
      // 2.fields 对象类型 保存普通表单数据
      // 3.files 对象类型 保存了和上传文件相关的数据
      // res.send(files.cover.path.split('public')[1])
      console.log('fields :>> ', fields, id);
      //修改
      await Article.updateOne(
        { _id: id },
        {
          title: fields.title,
          // author: fields.author,
          cover: fields.cover,
          content: fields.content,
        }
      );
      // 将页面重定向到文章列表页面
      res.redirect('/admin/article');
    });
    // res.send('ok');
  },
  //删除
  delete: async (req, res) => {
    // 根据id删除文章
    const result = await Article.findOneAndDelete({ _id: req.query.id });
    console.log('req.query.id :>> ', req.query.id, result);
    if (result) {
      // 将页面重定向到文章列表页面
      res.redirect('/admin/article');
    } else {
      //删除失败
    }
  },
  //上传图片
  uploadImg: (req, res, next) => {
    try {
      // 1.创建表单解析对象
      const form = new formidable.IncomingForm();
      // 2.配置上传文件的存放位置
      form.uploadDir = path.join(__dirname, '../', 'public', 'uploads/images');
      // console.log('form.uploadDir :>> ', form.uploadDir);
      // 3.保留上传文件的后缀
      form.keepExtensions = true;

      // 4.解析表单
      form.parse(req, async (err, fields, files) => {
        // 1.err错误对象 如果表单解析失败 err里面存储错误信息 如果表单解析成功 err将会是null
        // 2.fields 对象类型 保存普通表单数据
        // 3.files 对象类型 保存了和上传文件相关的数据
        // console.log('files :>> ', files, files.upload);
        let filename = files.upload.path.split('public')[1];
        // console.log('filename', filename);
        return res.json({ uploaded: true, url: filename });
        // res.send(files.cover.path.split('public')[1])
      });
    } catch (e) {
      console.log(e);
    }
  },
};
