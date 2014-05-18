'use strict'

var api = require('../api/pressure')

var unit = 'ton-per-square-foot'

var def = require('../definition/pressure/ton-per-square-foot')

api.augment(unit, def)

module.exports = api[unit]
