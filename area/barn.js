'use strict'

var api = require('../api/area')

var unit = 'barn'

require('../definition/area/barn')

api.augment(unit)

module.exports = api[unit]
