var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('bieber', { src: '/images/nickelback.jpg' });
});

module.exports = router;

