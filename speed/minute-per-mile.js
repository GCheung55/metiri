'use strict'

var api = require('../api/speed')

var unit = 'minute-per-mile'

require('../definition/speed/minute-per-mile')

api.augment(unit)
api.augment(unit, 'minute.per.mile')

module.exports = api[unit]
