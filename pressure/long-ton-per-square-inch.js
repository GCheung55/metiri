'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/long-ton-per-square-inch')

var unit = 'long-ton-per-square-inch'

api.augment(unit, def)

module.exports = api.get(unit)
