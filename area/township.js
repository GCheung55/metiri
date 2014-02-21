'use strict'

var api = require('../api/area')

var unit = 'township'

require('../definition/area/township')

api.augment(unit)

module.exports = api[unit]
