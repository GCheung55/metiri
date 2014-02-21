'use strict'

var api = require('../api/mass')

var stone = 'stone'

require('../definition/mass/stone')

api.augment(stone)

module.exports = api[stone]
