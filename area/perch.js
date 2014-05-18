'use strict'

var api = require('../api/area')

var unit = 'perch'

var def = require('../definition/area/perch')

api.augment(unit, def)

module.exports = api[unit]
