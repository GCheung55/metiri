'use strict'

var api = require('../api/volume')

var unit = 'milliliter'

var def = require('../definition/volume/milliliter')

api.augment(unit, def)

module.exports = api[unit]
