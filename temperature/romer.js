'use strict'

var api = require('../api/temperature')

var romer = 'romer'

require('../definition/temperature/romer')

api.augment(romer)

module.exports = api[romer]
