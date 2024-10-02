var express = require('express');
const { sendMail } = require('../services/sendMail');
var router = express.Router();

// send email
router.post('/', async function (req, res) {
  try {
    const apiKey = req.headers.mailerkey || null
    const from = req.headers.from || null
    const authPass = req.headers.authpass || null
    const service = req.headers.service || null

    if (apiKey == null || apiKey != process.env.API_KEY) {
      return res.status(401).send('Your are not authorized')
    }

    if (from == null || authPass == null || service == null) {
      return res.status(403).send('Argument not found')
    }
    //
    body = req.body
    result = await sendMail(
      body["to"],
      body["subject"],
      body["text"],
      from,
      authPass,
      service
    )

    return res.status(200).json({
      "code error": 0,
      "message": "Mail send 🐳",
    })
  } catch (error) {
    return res.status(500).json({
      "code error": 1,
      "message": error
    })
  }
});

module.exports = router;
