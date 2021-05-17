//user.js文件

import Mock from 'mockjs';
import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /api/user': (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send(Mock.mock({
	  code: 200,
	  msg: '请求成功',
	  data: {
		title:'不败顽童',
		name: '古三通',
		realName:'张卫健'
	  }
	}));
  }
 };

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);

