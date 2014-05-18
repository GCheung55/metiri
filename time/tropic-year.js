'use strict'

var api = require('../api/time')

var unit = 'tropic-year'

var def = require('../definition/time/tropic-year')

api.augment(unit, def)
api.augment(unit, 'tropic.year')

module.exports = api[unit]
