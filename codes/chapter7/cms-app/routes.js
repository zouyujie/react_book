let loginController = require('./controllers/login-controller');
let homeController = require('./controllers/home-controller');
let userController = require('./controllers/user-controller');
let articleController = require('./controllers/article-controller');

module.exports = function (app) {
  loginController.registerRoutes(app);
  homeController.registerRoutes(app);
  userController.registerRoutes(app);
  articleController.registerRoutes(app);
};
