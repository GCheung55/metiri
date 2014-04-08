'use strict'

var api = require('../api/area')

var unit = 'square-imperial'

require('../definition/area/square-imperial')

api.augment(unit, 'square.imperial')

module.exports = api[unit]
