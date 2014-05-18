'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-hour'

var def = require('../definition/speed/kilometer-per-hour')

api.augment(unit, def)

module.exports = api[unit]
