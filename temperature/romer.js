'use strict'

var api = require('../api/temperature')

var romer = 'romer'

var def = require('../definition/temperature/romer')

api.augment(romer, def)

module.exports = api[romer]
