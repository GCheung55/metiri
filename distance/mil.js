'use strict'

var api = require('../api/distance')

var unit = 'mil'

var def = require('../definition/distance/mil')

api.augment(unit, def)

module.exports = api[unit]
