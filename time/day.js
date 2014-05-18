'use strict'

var api = require('../api/time')

var unit = 'day'

var def = require('../definition/time/day')

api.augment(unit, def)

module.exports = api[unit]
