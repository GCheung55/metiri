'use strict'

var api = require('../api/temperature')

var fahrenheit = 'fahrenheit'

var def = require('../definition/temperature/fahrenheit')

api.augment(fahrenheit, def)

module.exports = api[fahrenheit]
