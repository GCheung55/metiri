'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/acre-foot')

var unit = 'acre-foot'

api.augment(unit, def)

module.exports = api.get(unit)
