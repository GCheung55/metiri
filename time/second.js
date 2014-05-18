'use strict'

var api = require('../api/time')

var unit = 'second'

var def = require('../definition/time/second')

api.augment(unit, def)

module.exports = api[unit]
