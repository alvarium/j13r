#!/usr/bin/env node
const argv = require('yargs').argv
const json2template = require('./src/json2template').json2template

json2template(argv)
