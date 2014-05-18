'use strict'

var api = require('../api/volume')

var unit = 'dry-barrel'

var def = require('../definition/volume/dry-barrel')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
