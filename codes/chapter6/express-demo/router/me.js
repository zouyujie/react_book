const express = require('express');
const me = express.Router();
me.get('/index', (req, res) => {
  res.send('我是画江湖之不良人');
});
module.exports = me;
