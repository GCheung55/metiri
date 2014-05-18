'use strict'

var api = require('../api/speed')

var unit = 'minute-per-mile'

var def = require('../definition/speed/minute-per-mile')

api.augment(unit, def)
api.augment(unit, 'minute.per.mile')

module.exports = api[unit]
