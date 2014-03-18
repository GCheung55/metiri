'use strict'

var api = require('../api/volume')

var unit = 'cubic-kilometer'

require('../definition/volume/cubic-kilometer')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
