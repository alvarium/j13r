const path = require('path')

const fs = jest.genMockFromModule('fs')

fs.existsSync = () => {
  return true
}

fs.readFileSync = () => {
  return '{"test":"value"}'
}

module.exports = fs
