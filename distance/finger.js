'use strict'

var api = require('../api/distance')

var unit = 'finger'

var def = require('../definition/distance/finger')

api.augment(unit, def)

module.exports = api[unit]
