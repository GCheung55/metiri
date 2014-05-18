'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/mile-per-hour')

var unit = 'mile-per-hour'

api.augment(unit, def)

module.exports = api.get(unit)
