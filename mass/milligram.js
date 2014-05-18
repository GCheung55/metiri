'use strict'

var api = require('../api/mass')

var unit = 'milligram'

var def = require('../definition/mass/milligram')

api.augment(unit, def)

module.exports = api[unit]
