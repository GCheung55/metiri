'use strict'

var distance = require('./centimeter')

distance.set('mile', 'centimeter', 1 / 0.0000062137119)

module.exports = distance
