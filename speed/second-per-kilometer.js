'use strict'

var api = require('../api/speed')

var unit = 'second-per-kilometer'

var def = require('../definition/speed/second-per-kilometer')

api.augment(unit, def)
api.augment(unit, 'second.per.kilometer')

module.exports = api[unit]
