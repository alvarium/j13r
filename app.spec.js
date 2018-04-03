const request = require('supertest')
const app = require('./app')

describe('Test app', () => {
  test('Should fail if no url is provided', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(400)
      done()
    })
  })

  const url = 'https://jsonplaceholder.typicode.com/posts'
  const testUrl = `/?url=${encodeURI(url)}`

  test('Should fail if no template has been specified', (done) => {
    request(app).get(testUrl).then((response) => {
      expect(response.statusCode).toBe(400)
      done()
    })
  })

  test('Should get Remote API json object and render provided template', (done) => {
    const testUrlWithTemplate = testUrl + '&template=test-template'
    request(app).get(testUrlWithTemplate).then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
