'use strict'

var api = require('../api/distance')

var unit = 'meter'

var def = require('../definition/distance/meter')

api.augment(unit, def)

module.exports = api[unit]
