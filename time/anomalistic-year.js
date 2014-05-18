'use strict'

var api = require('../api/time')
var def = require('../definition/time/anomalistic-year')

var unit = 'anomalistic-year'

api.augment(unit, def)

module.exports = api.get(unit)
