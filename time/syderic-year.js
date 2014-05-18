'use strict'

var api = require('../api/time')

var unit = 'syderic-year'

var def = require('../definition/time/syderic-year')

api.augment(unit, def)
api.augment(unit, 'syderic.year')

module.exports = api[unit]
