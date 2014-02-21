'use strict'

var api = require('../api/mass')

var unit = 'long-ton'

require('../definition/mass/long-ton')

api.augment(unit)
api.augment(unit, 'ton.long')

module.exports = api[unit]
