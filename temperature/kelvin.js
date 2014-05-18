'use strict'

var api = require('../api/temperature')

var kelvin = 'kelvin'

var def = require('../definition/temperature/kelvin')

api.augment(kelvin, def)

module.exports = api[kelvin]
