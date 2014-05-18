'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-second'

var def = require('../definition/speed/kilometer-per-second')

api.augment(unit, def)

module.exports = api[unit]
