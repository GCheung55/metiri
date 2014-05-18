'use strict'

var api = require('../api/mass')
var def = require('../definition/mass/ton-metric')

var unit = 'ton-metric'

api.augment(unit, def)

module.exports = api.get(unit)
