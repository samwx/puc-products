var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    id: 1,
    name: 'iPhone 11',
    price: 10000.00
  });
});

module.exports = router;
