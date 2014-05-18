'use strict'

var api = require('../api/speed')

var unit = 'meter-per-second'

var def = require('../definition/speed/meter-per-second')

api.augment(unit, def)

module.exports = api[unit]
