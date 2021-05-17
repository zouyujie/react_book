const express = require('express');
const router = express.Router();

const userList = [
  {
    id: 1,
    name: '李渊',
    nickName: '唐高祖',
    msg: '享年七十岁,在位八年,五十二岁登基.',
  },
  {
    id: 2,
    name: '李世民',
    nickName: '唐太宗',
    msg: '享年五十二岁,在位二十三年,二十八岁登基。',
  },
];
router.get('/api/detail', (req, res) => {
  const { id } = req.query;
  let user = userList.find((n) => n.id == id);
  res.send(user);
});
router.post('/api/list', (req, res) => {
  let { username } = req.query;
  let filterData = username
    ? userList.filter((s) => s.name.includes(username))
    : userList;
  res.send(filterData);
});
module.exports = router;
