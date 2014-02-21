'use strict'

var api = require('../api/distance')

var unit = 'chain'

require('../definition/distance/chain')

api.augment(unit)

module.exports = api[unit]
