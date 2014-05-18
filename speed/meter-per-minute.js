'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/meter-per-minute')

var unit = 'meter-per-minute'

api.augment(unit, def)

module.exports = api.get(unit)
