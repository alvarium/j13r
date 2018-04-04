const fs = require('fs')
const nunjucks = require('nunjucks')
const dateFilter = require('nunjucks-date-filter')
const env = new nunjucks.Environment()

env.addFilter('date', dateFilter)

const baseDir = __dirname + '/../../templates'

const loadTemplate = (templateName, secure = true) => {
  let templateContents = ''

  if (!secure) {
    if (fs.existsSync(templateName)) {
      templateContents = fs.readFileSync(templateName, 'utf8')
    }
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
  return env.renderString(template, vars)
}
module.exports.renderTemplate = renderTemplate

module.exports.render = (templateName, vars, secure = true) => {
  const template = loadTemplate(templateName, secure)
  return renderTemplate(template, vars)
}

