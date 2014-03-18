'use strict'

var api = require('../api/volume')

var unit = 'cubic-decimeter'

require('../definition/volume/cubic-decimeter')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
