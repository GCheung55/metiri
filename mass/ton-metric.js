'use strict'

var api = require('../api/mass')

var unit = 'ton-metric'

var def = require('../definition/mass/ton-metric')

api.augment(unit, 'ton.metric', def)

module.exports = api[unit]
