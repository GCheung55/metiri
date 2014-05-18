'use strict'

var api = require('../api/time')
var def = require('../definition/time/julian-year')

var unit = 'julian-year'

api.augment(unit, def)

module.exports = api.get(unit)
