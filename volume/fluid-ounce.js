'use strict'

var api = require('../api/volume')

var unit = 'fluid-ounce'

var def = require('../definition/volume/fluid-ounce')

api.augment(unit, def)

module.exports = api[unit]
