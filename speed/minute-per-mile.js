'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/minute-per-mile')

var unit = 'minute-per-mile'

api.augment(unit, def)

module.exports = api.get(unit)
