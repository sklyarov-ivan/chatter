
exports = function (app) {
  app.get('/', function(req, res){
      res.render('index')
  });
  logger.debug('here')
  return app;
}