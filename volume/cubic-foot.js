'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-foot')

var unit = 'cubic-foot'

api.augment(unit, def)

module.exports = api.get(unit)
