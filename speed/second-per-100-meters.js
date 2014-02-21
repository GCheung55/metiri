'use strict'

var api = require('../api/speed')

var unit = 'second-per-100-meters'

require('../definition/speed/second-per-100-meters')

api.augment(unit)
api.augment(unit, 'second.per.100.meters')

module.exports = api[unit]
