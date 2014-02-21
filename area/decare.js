'use strict'

var api = require('../api/area')

var unit = 'decare'

require('../definition/area/decare')

api.augment(unit)

module.exports = api[unit]
