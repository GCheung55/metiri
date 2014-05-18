'use strict'

var api = require('../api/volume')

var unit = 'dry-peck'

var def = require('../definition/volume/dry-peck')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
