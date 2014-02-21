'use strict'

var api = require('../api/distance')

var unit = 'perch'

require('../definition/distance/perch')

api.augment(unit)

module.exports = api[unit]
