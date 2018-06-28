var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Hello Adam, I couldn\'t cut it as a poor man stealing' });
});

module.exports = router;

