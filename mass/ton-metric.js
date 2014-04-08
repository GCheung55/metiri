'use strict'

var api = require('../api/mass')

var unit = 'ton-metric'

require('../definition/mass/ton-metric')

api.augment(unit, 'ton.metric')

module.exports = api[unit]
