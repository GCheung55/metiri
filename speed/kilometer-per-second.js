'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-second'

require('../definition/speed/kilometer-per-second')

api.augment(unit)
api.augment(unit, 'kilometer.per.second')

module.exports = api[unit]
