'use strict'

var area = require('./square-meter')

area.set('square-inch', 'square-meter', 1 / 1550.0031)

module.exports = area
