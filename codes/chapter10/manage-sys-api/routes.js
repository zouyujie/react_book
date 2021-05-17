let homeController = require('./controllers/home-controller');
let userController = require('./controllers/user-controller');

module.exports = function (app) {
  homeController.registerRoutes(app);
  userController.registerRoutes(app);
};
