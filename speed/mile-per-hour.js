'use strict'

var api = require('../api/speed')

var unit = 'mile-per-hour'

var def = require('../definition/speed/mile-per-hour')

api.augment(unit, def)

module.exports = api[unit]
