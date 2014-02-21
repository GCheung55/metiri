'use strict'

var api = require('../api/distance')

var unit = 'furlong'

require('../definition/distance/furlong')

api.augment(unit)

module.exports = api[unit]
