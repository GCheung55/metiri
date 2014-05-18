'use strict'

var api = require('../api/volume')

var unit = 'imperial-barrel'

var def = require('../definition/volume/imperial-barrel')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
