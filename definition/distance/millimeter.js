'use strict'

var distance = require('./centimeter')

distance.set('millimeter', 'centimeter', 1 / 10)

module.exports = distance
