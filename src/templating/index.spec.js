const templating = require('./index.js')

jest.mock('fs')


describe('Templating', () => {
  describe('loadTemplate', () => {
    test('Should look for template in specified folder', (done) => {
      const template = templating.loadTemplate('test.json')
      expect(template).toBe('{"test":"value"}')
      done()
    })
  })

  describe('renderTemplate', () => {
    test('Should render template with provided vars', (done) => {
      const template = 'This is a nunjucks template {{ foo }}'
      const vars = {foo: 'bar'}
      const rendered = templating.renderTemplate(template, vars)
      expect(rendered).toBe('This is a nunjucks template bar')
      done()
    })
  })
})
