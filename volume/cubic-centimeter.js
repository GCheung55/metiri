'use strict'

var api = require('../api/volume')

var unit = 'cubic-centimeter'

require('../definition/volume/cubic-centimeter')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
