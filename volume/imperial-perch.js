'use strict'

var api = require('../api/volume')

var unit = 'imperial-perch'

var def = require('../definition/volume/imperial-perch')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
