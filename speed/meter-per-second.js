'use strict'

var api = require('../api/speed')

var unit = 'meter-per-second'

require('../definition/speed/meter-per-second')

api.augment(unit)
api.augment(unit, 'meter.per.second')

module.exports = api[unit]
