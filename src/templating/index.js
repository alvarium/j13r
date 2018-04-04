const fs = require('fs')
const nunjucks = require('nunjucks')

const baseDir = __dirname + '/../../templates'

const loadTemplate = (templateName) => {
  let templateContents

  if (fs.existsSync(templateName)) {
    templateContents = fs.readFileSync(templateName, 'utf8')
  }

  if (!templateContents && fs.existsSync(baseDir + '/' + templateName)) {
    templateContents = fs.readFileSync(baseDir + '/' + templateName, 'utf8')
  }

  if (!templateContents && fs.existsSync(process.cwd() + '/' + templateName)) {
    templateContents = fs.readFileSync(process.cwd() + '/' + templateName, 'utf8')
  }

  return templateContents
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

