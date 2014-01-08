'use strict'

var length = require('./centimeter')

length.set('millimeter', 'centimeter', 1 / 10)

module.exports = length
