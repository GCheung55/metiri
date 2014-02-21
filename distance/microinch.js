'use strict'

var api = require('../api/distance')

var unit = 'microinch'

require('../definition/distance/microinch')

api.augment(unit)

module.exports = api[unit]
