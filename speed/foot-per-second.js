'use strict'

var api = require('../api/speed')

var unit = 'foot-per-second'

var def = require('../definition/speed/foot-per-second')

api.augment(unit, def)

module.exports = api[unit]
