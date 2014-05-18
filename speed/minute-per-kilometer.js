'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/minute-per-kilometer')

var unit = 'minute-per-kilometer'

api.augment(unit, def)

module.exports = api.get(unit)
