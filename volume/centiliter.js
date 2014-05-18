'use strict'

var api = require('../api/volume')

var unit = 'centiliter'

var def = require('../definition/volume/centiliter')

api.augment(unit, def)

module.exports = api[unit]
