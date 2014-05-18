'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/fluid-ounce')

var unit = 'fluid-ounce'

api.augment(unit, def)

module.exports = api.get(unit)
