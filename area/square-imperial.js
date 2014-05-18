'use strict'

var api = require('../api/area')

var unit = 'square-imperial'

var def = require('../definition/area/square-imperial')

api.augment(unit, def)

module.exports = api[unit]
