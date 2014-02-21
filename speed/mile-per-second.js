'use strict'

var api = require('../api/speed')

var unit = 'mile-per-second'

require('../definition/speed/mile-per-second')

api.augment(unit)
api.augment(unit, 'mile.per.second')

module.exports = api[unit]
