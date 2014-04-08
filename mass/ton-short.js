'use strict'

var api = require('../api/mass')

var unit = 'ton-short'

require('../definition/mass/ton-short')

api.augment(unit, 'ton.short')

module.exports = api[unit]
