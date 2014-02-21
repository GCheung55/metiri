'use strict'

var api = require('../api/speed')

var unit = 'meter-per-minute'

require('../definition/speed/meter-per-minute')

api.augment(unit)
api.augment(unit, 'meter.per.minute')

module.exports = api[unit]
