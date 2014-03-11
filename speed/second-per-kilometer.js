'use strict'

var api = require('../api/speed')

var unit = 'second-per-kilometer'

require('../definition/speed/second-per-kilometer')

api.augment(unit)
api.augment(unit, 'second.per.kilometer')

module.exports = api[unit]
