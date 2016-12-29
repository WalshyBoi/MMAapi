module.exports = function(app) {

  
  app.use('/api/fighters', require('./api/fighter/index'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(function(req, res) {
    res.send(404);
  })

};