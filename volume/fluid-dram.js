'use strict'

var api = require('../api/volume')

var unit = 'fluid-dram'

require('../definition/volume/fluid-dram')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
