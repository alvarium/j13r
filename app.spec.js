const request = require('supertest')
const app = require('./app')

describe('Test app', () => {
  test('Should get Remote API json object and render provided template', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
