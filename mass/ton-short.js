'use strict'

var api = require('../api/mass')
var def = require('../definition/mass/ton-short')

var unit = 'ton-short'

api.augment(unit, def)

module.exports = api.get(unit)
