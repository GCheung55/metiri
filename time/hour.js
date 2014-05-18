'use strict'

var api = require('../api/time')

var unit = 'hour'

var def = require('../definition/time/hour')

api.augment(unit, def)

module.exports = api[unit]
