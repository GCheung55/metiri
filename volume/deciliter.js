'use strict'

var api = require('../api/volume')

var unit = 'deciliter'

var def = require('../definition/volume/deciliter')

api.augment(unit, def)

module.exports = api[unit]
