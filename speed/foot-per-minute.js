'use strict'

var api = require('../api/speed')

var unit = 'foot-per-minute'

var def = require('../definition/speed/foot-per-minute')

api.augment(unit, def)

module.exports = api[unit]
