'use strict'

var api = require('../api/time')

var unit = 'second'

require('../definition/time/second')

api.augment(unit)

module.exports = api[unit]
