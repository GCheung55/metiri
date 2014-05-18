'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/fluid-dram')

var unit = 'fluid-dram'

api.augment(unit, def)

module.exports = api.get(unit)
