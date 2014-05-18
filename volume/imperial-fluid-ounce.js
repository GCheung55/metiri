'use strict'

var api = require('../api/volume')

var unit = 'imperial-fluid-ounce'

var def = require('../definition/volume/imperial-fluid-ounce')

api.augment(unit, def)

module.exports = api[unit]
