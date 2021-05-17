const serveStatic = require('serve-static');
const serve = serveStatic('public');
server.on('request', () => {
  serve(req, res);
});
server.listen(3000);
