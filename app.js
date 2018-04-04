const express = require('express')
const json2template = require('./src/json2template').json2template
const app = express()

// Handle rendering calls
app.get('/', function (req, res) {
  if (!req.query.url || !req.query.template) {
    return res.status(400).send('You must provide a url and template')
  }

  const params = {
    url: req.query.url,
    template: req.query.template
  }

  json2template(params, (err, renderedTemplate) => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }

    return res.send(renderedTemplate)
  })

})

module.exports = app
