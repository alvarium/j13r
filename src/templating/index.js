const fs = require('fs')
const nunjucks = require('nunjucks')

const baseDir = __dirname + '/../../templates'

module.exports.loadTemplate = (templateName) => {
  const files = fs.readdirSync(baseDir)

  let template = ''

  files.forEach((file) => {
    if (file === templateName) {
      template = fs.readFileSync(baseDir + '/' + file, 'utf8')
    }
  })

  return template
}

module.exports.renderTemplate = (template, vars) => {
  return nunjucks.renderString(template, vars)
}
