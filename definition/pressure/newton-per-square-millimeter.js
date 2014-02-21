'use strict'

var pressure = require('./pascal')

pressure.set('newton-per-square-millimeter', 'pascal', 1 / 1E-6)

module.exports = pressure
