const express = require('express');
const app = express();
const path = require('path');

// 当渲染后缀为art的模板时，使用 express-art-template
app.engine('art', require('express-art-template'));
//设置模板存放的路径
app.set('views', path.join(__dirname, 'views'));
//设置渲染模板时的默认后缀
app.set('view engine', 'art');

app.locals.songName = '《我》';

app.get('/my', (req, res) => {
  //渲染模板
  res.render('my', { msg: '我就是我，是颜色不一样的烟火' });
});

app.listen(80);
console.log('网站服务器启动成功，监听80端口');
