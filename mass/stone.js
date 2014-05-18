'use strict'

var api = require('../api/mass')

var stone = 'stone'

var def = require('../definition/mass/stone')

api.augment(stone, def)

module.exports = api[stone]
