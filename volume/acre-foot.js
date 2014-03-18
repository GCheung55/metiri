'use strict'

var api = require('../api/volume')

var unit = 'acre-foot'

require('../definition/volume/acre-foot')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
