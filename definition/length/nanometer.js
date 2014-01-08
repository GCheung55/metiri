'use strict'

var length = require('./centimeter')

length.set('nanometer', 'centimeter', 1 / 10000000)

module.exports = length
