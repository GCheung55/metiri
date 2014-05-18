'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/dry-barrel')

var unit = 'dry-barrel'

api.augment(unit, def)

module.exports = api.get(unit)
