'use strict'

var api = require('../api/speed')

var unit = 'meter-per-minute'

var def = require('../definition/speed/meter-per-minute')

api.augment(unit, def)

module.exports = api[unit]
