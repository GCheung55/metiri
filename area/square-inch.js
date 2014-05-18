'use strict'

var api = require('../api/area')

var unit = 'square-inch'

var def = require('../definition/area/square-inch')

api.augment(unit, def)

module.exports = api[unit]
