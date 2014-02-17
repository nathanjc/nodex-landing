
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Nodex' });
};

exports.subscribed = function(req, res) {
  res.render('subscribed', { title: 'Nodex' });
};

exports.manifesto = function(req, res) {
  res.render('manifesto', { title: 'Nodex' });
};