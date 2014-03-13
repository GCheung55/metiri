'use strict'

var api = require('../api/time')

var unit = 'day'

require('../definition/time/day')

api.augment(unit)

module.exports = api[unit]
