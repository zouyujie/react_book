const fs = require('fs');
const path = require('path');
//D:\WorkSpace\react_book\codes\chapter2\js
console.log(__dirname);
// D:\WorkSpace\react_book\codes\chapter2\js\file.txt
console.log(path.join(__dirname, 'file.txt'));

fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err, doc) => {
  console.log(err); //null
  console.log(doc); //阳顶天-大九天手
});
