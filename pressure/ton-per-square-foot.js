'use strict'

var api = require('../api/pressure')

var unit = 'ton-per-square-foot'

require('../definition/pressure/ton-per-square-foot')

api.augment(unit)
api.augment(unit, 'ton.per.square.foot')

module.exports = api[unit]
