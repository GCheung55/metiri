'use strict'

var api = require('../api/speed')

var unit = 'minute-per-kilometer'

var def = require('../definition/speed/minute-per-kilometer')

api.augment(unit, def)
api.augment(unit, 'minute.per.kilometer')

module.exports = api[unit]
