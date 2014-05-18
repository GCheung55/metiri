'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-fluid-ounce')

var unit = 'imperial-fluid-ounce'

api.augment(unit, def)

module.exports = api.get(unit)
