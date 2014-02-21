'use strict'

var api = require('../api/area')

var unit = 'square'

require('../definition/area/square')

api.augment(unit)

module.exports = api[unit]
