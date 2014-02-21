'use strict'

var api = require('../api/distance')

var unit = 'ell'

require('../definition/distance/ell')

api.augment(unit)

module.exports = api[unit]
