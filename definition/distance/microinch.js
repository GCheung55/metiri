'use strict'

var distance = require('./centimeter')

distance.set('microinch', 'centimeter', 1 / 393700.79)

module.exports = distance
