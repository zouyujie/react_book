//.roadhogrc.mock.js文件，加载mock的数据，通过循环把在mock文件夹下的所有扩展名是.js的配置文件都拿到，并最后export出去
const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname + '/mock');
const mock = {};
fs.readdirSync(mockPath).forEach(file => {
    if(file.match(/\.js$/)){
        Object.assign(mock, require('./mock/' + file));
    }
});
export default mock;

