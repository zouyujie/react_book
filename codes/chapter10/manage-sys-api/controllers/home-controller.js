const { Home } = require('../models/home');

module.exports = {
  registerRoutes: function (app) {
    app.get('/api/home', this.getHomeData);
  },
  //首页
  getHomeData: async (req, res) => {
    let homeData = await Home.findOne({});
    // console.log('homeData', homeData);
    let resData = { code: 200, data: {}, msg: '' };
    if (homeData) {
      resData.data = homeData;
    } else {
      resData.code = 400;
      resData.msg = '暂无数据';
    }
    res.send(resData);
  },
};
