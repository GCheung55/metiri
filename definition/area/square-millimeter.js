'use strict'

var area = require('./square-meter')

area.set('square-millimeter', 'square-meter', 1 / 1E6)

module.exports = area
