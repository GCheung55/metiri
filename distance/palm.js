'use strict'

var api = require('../api/distance')

var unit = 'palm'

require('../definition/distance/palm')

api.augment(unit)

module.exports = api[unit]
