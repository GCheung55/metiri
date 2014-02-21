'use strict'

var api = require('../api/speed')

var unit = 'minute-per-kilometer'

require('../definition/speed/minute-per-kilometer')

api.augment(unit)
api.augment(unit, 'minute.per.kilometer')

module.exports = api[unit]
