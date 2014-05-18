'use strict'

var api = require('../api/distance')

var unit = 'centimeter'

var def = require('../definition/distance/centimeter')

api.augment(unit, def)

module.exports = api[unit]
