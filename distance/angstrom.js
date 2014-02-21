'use strict'

var api = require('../api/distance')

var unit = 'angstrom'

require('../definition/distance/angstrom')

api.augment(unit)

module.exports = api[unit]
