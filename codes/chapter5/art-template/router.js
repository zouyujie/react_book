const getRouter = require('router');
const router = getRouter();
router.get('/list', (req, res) => {
  res.end('大唐不良人何在');
});
server.on('request', (req, res) => {
  router(req, res);
});
