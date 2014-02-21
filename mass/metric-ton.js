'use strict'

var api = require('../api/mass')

var unit = 'metric-ton'

require('../definition/mass/metric-ton')

api.augment(unit)
api.augment(unit, 'ton.metric')

module.exports = api[unit]
