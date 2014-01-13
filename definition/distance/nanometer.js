'use strict'

var distance = require('./centimeter')

distance.set('nanometer', 'centimeter', 1 / 10000000)

module.exports = distance
