'use strict'

var api = require('../api/time')
var def = require('../definition/time/syderic-month')

var unit = 'syderic-month'

api.augment(unit, def)

module.exports = api.get(unit)
