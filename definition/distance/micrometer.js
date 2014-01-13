'use strict'

var distance = require('./centimeter')

distance.set('micrometer', 'centimeter', 1 / 10000)

module.exports = distance
