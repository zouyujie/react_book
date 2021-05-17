var express = require('express');
var app = express();
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use('/about', (req, res, next) => {
  console.log(req.url);
  next();
});
