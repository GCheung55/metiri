'use strict'

var api = require('../api/mass')
var def = require('../definition/mass/ton-long')

var unit = 'ton-long'

api.augment(unit, def)

module.exports = api.get(unit)
