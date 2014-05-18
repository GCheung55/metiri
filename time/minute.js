'use strict'

var api = require('../api/time')

var unit = 'minute'

var def = require('../definition/time/minute')

api.augment(unit, def)

module.exports = api[unit]
