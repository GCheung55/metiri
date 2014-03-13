'use strict'

var api = require('../api/time')

var unit = 'minute'

require('../definition/time/minute')

api.augment(unit)

module.exports = api[unit]
