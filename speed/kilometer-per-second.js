'use strict'

var api = require('../api/speed')

var unit = 'kilometer-per-second'

var def = require('../definition/speed/kilometer-per-second')

api.augment(unit, def)
api.augment(unit, 'kilometer.per.second')

module.exports = api[unit]
