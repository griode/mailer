var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {
  res.send("Hi 🐳, Send email by emailer ")
});

module.exports = router;
