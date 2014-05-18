'use strict'

var api = require('../api/time')
var def = require('../definition/time/gregorian-year')

var unit = 'gregorian-year'

api.augment(unit, def)
api.augment(unit, 'year')

module.exports = api.get(unit)
