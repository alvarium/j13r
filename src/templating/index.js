const fs = require('fs')
const nunjucks = require('nunjucks')

const baseDir = __dirname + '/../../'

const loadTemplate = (templateName) => {
  const files = fs.readdirSync(baseDir)

  let template = ''

  files.forEach((file) => {
    if (file === templateName) {
      template = fs.readFileSync(baseDir + '/' + file, 'utf8')
    }
  })

  return template
}
module.exports.loadTemplate = loadTemplate

const renderTemplate = (template, vars) => {
  return nunjucks.renderString(template, vars)
}
module.exports.renderTemplate = renderTemplate

module.exports.render = (templateName, vars) => {
  const template = loadTemplate(templateName)
  return renderTemplate(template, vars)
}

