'use strict'

var api = require('../api/time')
var def = require('../definition/time/tropic-year')

var unit = 'tropic-year'

api.augment(unit, def)

module.exports = api.get(unit)
