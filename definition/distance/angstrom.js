'use strict'

var distance = require('./centimeter')

distance.set('angstrom', 'centimeter', 1 / 100000000)

module.exports = distance
