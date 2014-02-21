'use strict'

var api = require('./pascal')

var unit = 'pound-per-square-foot'

require('../definition/pressure/pound-per-square-foot')

api.augment(unit)
api.augment(unit, 'pound.per.square.foot')

module.exports = api[unit]