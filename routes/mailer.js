var express = require('express');
const { sendMail } = require('../services/sendMail');
var router = express.Router();

// send email
router.post('/', async function (req, res) {
  try {
    body = req.body
    result = await sendMail(
      body["to"],
      body["subject"],
      body["text"]
    )
    res.status(200).json({
      "code error": 0,
      "message": "Mail send 🐳"
    })
  } catch (error) {
    res.status(404).json({
      "code error": 1,
      "message": error
    })
  }
});

module.exports = router;
