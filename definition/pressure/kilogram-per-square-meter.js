'use strict'

var pressure = require('./pascal')

pressure.set('kilogram-per-square-meter', 'pascal', 1 / 0.10197162)

module.exports = pressure
