'use strict'

var api = require('../api/volume')

var unit = 'cubic-millimeter'

require('../definition/volume/cubic-millimeter')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
