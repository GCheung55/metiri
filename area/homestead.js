'use strict'

var api = require('../api/area')

var unit = 'homestead'

require('../definition/area/homestead')

api.augment(unit)

module.exports = api[unit]
