const path = require('path')

const fs = jest.genMockFromModule('fs')

fs.readdirSync = () => {
  return ['test.json']
}

fs.readFileSync = () => {
  return '{"test":"value"}'
}

module.exports = fs
