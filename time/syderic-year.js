'use strict'

var api = require('../api/time')
var def = require('../definition/time/syderic-year')

var unit = 'syderic-year'

api.augment(unit, def)

module.exports = api.get(unit)
