'use strict'

var api = require('./pascal')

var unit = 'ton-per-square-foot'

require('../definition/pressure/ton-per-square-foot')

api.augment(unit)
api.augment(unit, 'ton.per.square.foot')

module.exports = api[unit]
