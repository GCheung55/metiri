'use strict'

var api = require('../api/temperature')

var fahrenheit = 'fahrenheit'

require('../definition/temperature/fahrenheit')

api.augment(fahrenheit)

module.exports = api[fahrenheit]
