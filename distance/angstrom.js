'use strict'

var api = require('../api/distance')

var unit = 'angstrom'

var def = require('../definition/distance/angstrom')

api.augment(unit, def)

module.exports = api[unit]
