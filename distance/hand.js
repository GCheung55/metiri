'use strict'

var api = require('../api/distance')

var unit = 'hand'

require('../definition/distance/hand')

api.augment(unit)

module.exports = api[unit]
