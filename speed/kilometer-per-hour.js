'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-hour'

var def = require('../definition/speed/kilometer-per-hour')

api.augment(unit, def)
api.augment(unit, 'kilometer.per.hour')

module.exports = api[unit]
