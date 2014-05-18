'use strict'

var api = require('../api/area')

var unit = 'square-imperial'

var def = require('../definition/area/square-imperial')

api.augment(unit, 'square.imperial', def)

module.exports = api[unit]
