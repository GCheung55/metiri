'use strict'

var api = require('../api/speed')

var unit = 'second-per-100-yards'

require('../definition/speed/second-per-100-yards')

api.augment(unit)
api.augment(unit, 'second.per.100.yards')

module.exports = api[unit]
