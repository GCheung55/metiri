'use strict'

var api = require('../api/mass')

var unit = 'ton-short'

var def = require('../definition/mass/ton-short')

api.augment(unit, 'ton.short', def)

module.exports = api[unit]
