'use strict'

var api = require('../api/time')

var unit = 'week'

var def = require('../definition/time/week')

api.augment(unit, def)

module.exports = api[unit]
