var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.use('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'welcome.html'));
});

module.exports = router;
