'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/thousand-pounds-per-square-inch')

var unit = 'thousand-pounds-per-square-inch'

api.augment(unit, def)

module.exports = api.get(unit)
