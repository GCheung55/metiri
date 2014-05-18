'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/meter-per-second')

var unit = 'meter-per-second'

api.augment(unit, def)

module.exports = api.get(unit)
