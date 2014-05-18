'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-inch')

var unit = 'square-inch'

api.augment(unit, def)

module.exports = api.get(unit)
