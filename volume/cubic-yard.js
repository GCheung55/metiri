'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-yard')

var unit = 'cubic-yard'

api.augment(unit, def)

module.exports = api.get(unit)
