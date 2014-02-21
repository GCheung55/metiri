'use strict'

var api = require('../api/distance')

var unit = 'league'

require('../definition/distance/league')

api.augment(unit)

module.exports = api[unit]
