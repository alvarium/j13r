const http = require('./http')

describe('HTTP Data provider', () => {
  describe('retrieveData', () => {
    test('Should fetch data from provided url', (done) => {
      const url = 'https://jsonplaceholder.typicode.com/posts/1'
      http.fetchData(url)
        .then((result) => {
          expect(result.data).toEqual({
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          })
          done()
        })

        .catch((err) => {
          done(err)
        })
    })
  })
})
