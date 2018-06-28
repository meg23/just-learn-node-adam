var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Adam, I couldn\'t cut it as a poor man stealing' });
});

module.exports = router;
