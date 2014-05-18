'use strict'

var api = require('../api/volume')

var unit = 'decaliter'

var def = require('../definition/volume/decaliter')

api.augment(unit, def)

module.exports = api[unit]
