'use strict'

var api = require('../api/speed')

var unit = 'mile-per-second'

var def = require('../definition/speed/mile-per-second')

api.augment(unit, def)

module.exports = api[unit]
