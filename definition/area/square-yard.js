'use strict'

var area = require('./square-meter')

area.set('square-yard', 'square-meter', 1 / 1.19599)

module.exports = area
