'use strict'

var api = require('../api/volume')

var unit = 'imperial-perch'

require('../definition/volume/imperial-perch')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
