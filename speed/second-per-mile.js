'use strict'

var api = require('../api/speed')

var unit = 'second-per-mile'

require('../definition/speed/second-per-mile')

api.augment(unit)
api.augment(unit, 'second.per.mile')

module.exports = api[unit]
