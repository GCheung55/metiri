'use strict'

var api = require('../api/area')

var unit = 'barn'

var def = require('../definition/area/barn')

api.augment(unit, def)

module.exports = api[unit]
