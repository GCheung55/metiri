'use strict'

var api = require('../api/volume')

var unit = 'cubic-yard'

require('../definition/volume/cubic-yard')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
