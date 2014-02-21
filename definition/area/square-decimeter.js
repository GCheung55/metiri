'use strict'

var area = require('./square-meter')

area.set('square-decimeter', 'square-meter', 1 / 100)

module.exports = area
