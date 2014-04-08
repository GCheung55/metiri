'use strict'

var api = require('../api/mass')

var unit = 'ton-long'

require('../definition/mass/ton-long')

api.augment(unit, 'ton.long')

module.exports = api[unit]
