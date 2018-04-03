var express = require('express')
var app = express()

// Handle rendering calls
app.get('/', function (req, res) {
  if (!req.query.url) {
    return res.status(400).send('You must provide a url')
  }

  return res.send('hello j13r')
})

module.exports = app
