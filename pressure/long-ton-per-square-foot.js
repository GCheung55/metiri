'use strict'

var api = require('./pascal')

var unit = 'long-ton-per-square-foot'

require('../definition/pressure/long-ton-per-square-foot')

api.augment(unit)
api.augment(unit, 'long.ton.per.square.foot')

module.exports = api[unit]
