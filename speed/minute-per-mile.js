'use strict'

var api = require('../api/speed')

var unit = 'minute-per-mile'

var def = require('../definition/speed/minute-per-mile')

api.augment(unit, def)

module.exports = api[unit]
