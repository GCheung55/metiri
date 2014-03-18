'use strict'

var api = require('../api/volume')

var unit = 'cubic-meter'

require('../definition/volume/cubic-meter')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
