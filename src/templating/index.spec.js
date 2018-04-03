const templating = require('./index.js')

jest.mock('fs')


describe('Templating', () => {
  test('Should look for template in specified folder', (done) => {
    const template = templating.loadTemplate('test.json')
    expect(template).toBe('{"test":"value"}')
    done()
  })
})
