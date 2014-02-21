'use strict'

var api = require('../api/mass')

var unit = 'short-ton'

require('../definition/mass/short-ton')

api.augment(unit)
api.augment(unit, 'ton.short')

module.exports = api[unit]
