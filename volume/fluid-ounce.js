'use strict'

var api = require('../api/volume')

var unit = 'fluid-ounce'

var def = require('../definition/volume/fluid-ounce')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
