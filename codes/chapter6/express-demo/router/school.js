const express = require('express');
const school = express.Router();
school.get('/index', (req, res) => {
  res.send('这里是不良人总坛');
});
module.exports = school;
