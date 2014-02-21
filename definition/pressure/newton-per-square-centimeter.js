'use strict'

var pressure = require('./pascal')

pressure.set('newton-per-square-centimeter', 'pascal', 1 / 1E-4)

module.exports = pressure
