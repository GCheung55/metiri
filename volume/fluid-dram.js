'use strict'

var api = require('../api/volume')

var unit = 'fluid-dram'

var def = require('../definition/volume/fluid-dram')

api.augment(unit, def)

module.exports = api[unit]
