const axios = require('axios')

module.exports.fetchData = (url) => {
  return axios.get(url)
}
