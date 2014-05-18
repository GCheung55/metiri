'use strict'

var api = require('../api/distance')

var unit = 'nanometer'

var def = require('../definition/distance/nanometer')

api.augment(unit, def)

module.exports = api[unit]
