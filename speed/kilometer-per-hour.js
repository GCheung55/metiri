'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-hour'

require('../definition/speed/kilometer-per-hour')

api.augment(unit)
api.augment(unit, 'kilometer.per.hour')

module.exports = api[unit]
