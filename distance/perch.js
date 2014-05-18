'use strict'

var api = require('../api/distance')

var unit = 'perch'

var def = require('../definition/distance/perch')

api.augment(unit, def)

module.exports = api[unit]
