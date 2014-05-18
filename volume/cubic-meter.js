'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-meter')

var unit = 'cubic-meter'

api.augment(unit, def)

module.exports = api.get(unit)
