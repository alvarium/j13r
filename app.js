var express = require('express')
var app = express()

// Handle rendering calls
app.get('/', function (req, res) {
  if (!req.query.url || !req.query.template) {
    return res.status(400).send('You must provide a url and template')
  }

  return res.send('hello j13r')
})

module.exports = app
