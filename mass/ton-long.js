'use strict'

var api = require('../api/mass')

var unit = 'ton-long'

var def = require('../definition/mass/ton-long')

api.augment(unit, def)

module.exports = api[unit]
