'use strict'

var api = require('../api/temperature')

var kelvin = 'kelvin'

require('../definition/temperature/kelvin')

api.augment(kelvin)

module.exports = api[kelvin]
