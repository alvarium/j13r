const http = require('./data-provider/http')
const render = require('./templating/index').render

module.exports.json2template = (args, secure = true, cb) => {
  // Fetch requested url
  http.fetchData(args.url)
    .then((result) => {
      const rendered = render(args.template, result.data, secure)
      cb(null, rendered)
    })
    .catch((err) => {
      cb(err)
    })
}
