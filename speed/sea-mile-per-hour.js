'use strict'

var api = require('../api/speed')

var unit = 'sea-mile-per-hour'

var def = require('../definition/speed/sea-mile-per-hour')

api.augment(unit, def)
api.augment(unit, 'sea.mile.per.hour')

module.exports = api[unit]
