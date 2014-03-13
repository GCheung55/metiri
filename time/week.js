'use strict'

var api = require('../api/time')

var unit = 'week'

require('../definition/time/week')

api.augment(unit)

module.exports = api[unit]
