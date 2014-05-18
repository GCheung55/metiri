'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/ton-per-square-foot')

var unit = 'ton-per-square-foot'

api.augment(unit, def)

module.exports = api.get(unit)
