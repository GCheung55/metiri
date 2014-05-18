'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-barrel')

var unit = 'imperial-barrel'

api.augment(unit, def)

module.exports = api.get(unit)
