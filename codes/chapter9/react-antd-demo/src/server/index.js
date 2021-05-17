const express = require('express');
const app = express();
const router = require('./router');
app.use('/', router);
app.listen(4000, function () {
  console.log('serve running at port 4000');
});
