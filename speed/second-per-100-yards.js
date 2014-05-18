'use strict'

var api = require('../api/speed')

var unit = 'second-per-100-yards'

var def = require('../definition/speed/second-per-100-yards')

api.augment(unit, def)

module.exports = api[unit]
