'use strict'

var distance = require('./centimeter')

distance.set('inch', 'centimeter', 1 / 0.39370079)

module.exports = distance
