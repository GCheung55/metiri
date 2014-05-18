'use strict'

var api = require('../api/time')

var unit = 'syderic-month'

var def = require('../definition/time/syderic-month')

api.augment(unit, def)

module.exports = api[unit]
