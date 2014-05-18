'use strict'

var api = require('../api/speed')

var unit = 'second-per-100-yards'

var def = require('../definition/speed/second-per-100-yards')

api.augment(unit, def)
api.augment(unit, 'second.per.100.yards')

module.exports = api[unit]
