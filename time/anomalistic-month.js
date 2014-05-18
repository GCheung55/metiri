'use strict'

var api = require('../api/time')
var def = require('../definition/time/anomalistic-month')

var unit = 'anomalistic-month'

api.augment(unit, def)

module.exports = api.get(unit)
