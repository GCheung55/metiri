'use strict'

var api = require('../api/volume')

var unit = 'cubic-foot'

require('../definition/volume/cubic-foot')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
