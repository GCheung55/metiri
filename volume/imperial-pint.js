'use strict'

var api = require('../api/volume')

var unit = 'imperial-pint'

var def = require('../definition/volume/imperial-pint')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
