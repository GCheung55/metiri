'use strict'

var api = require('../api/volume')

var unit = 'imperial-fluid-ounce'

var def = require('../definition/volume/imperial-fluid-ounce')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
