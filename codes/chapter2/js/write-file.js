const fs = require('fs');

fs.writeFile('./file.txt', '阳顶天-大九天手', (err) => {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log('文件内容写入成功');
});
