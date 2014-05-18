'use strict'

var api = require('../api/distance')

var unit = 'microinch'

var def = require('../definition/distance/microinch')

api.augment(unit, def)

module.exports = api[unit]
