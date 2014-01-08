'use strict'

var length = require('./centimeter')

length.set('micrometer', 'centimeter', 1 / 10000)

module.exports = length
