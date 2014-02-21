'use strict'

var api = require('../api/area')

var unit = 'rood'

require('../definition/area/rood')

api.augment(unit)

module.exports = api[unit]
