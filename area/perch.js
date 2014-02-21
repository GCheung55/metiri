'use strict'

var api = require('../api/area')

var unit = 'perch'

require('../definition/area/perch')

api.augment(unit)

module.exports = api[unit]
