'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-pint')

var unit = 'imperial-pint'

api.augment(unit, def)

module.exports = api.get(unit)
