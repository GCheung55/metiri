'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/sea-mile-per-hour')

var unit = 'sea-mile-per-hour'

api.augment(unit, def)

module.exports = api.get(unit)
