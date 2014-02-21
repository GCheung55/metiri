'use strict'

var api = require('../api/speed')

var unit = 'mile-per-hour'

require('../definition/speed/mile-per-hour')

api.augment(unit)
api.augment(unit, 'mile.per.hour')

module.exports = api[unit]
