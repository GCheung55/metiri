'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-perch')

var unit = 'imperial-perch'

api.augment(unit, def)

module.exports = api.get(unit)
