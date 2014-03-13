'use strict'

var api = require('../api/time')

var unit = 'hour'

require('../definition/time/hour')

api.augment(unit)

module.exports = api[unit]
