'use strict'

var api = require('../api/volume')

var unit = 'liter'

var def = require('../definition/volume/liter')

api.augment(unit, def)

module.exports = api[unit]
