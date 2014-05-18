'use strict'

var api = require('../api/volume')

var unit = 'cubic-centimeter'

var def = require('../definition/volume/cubic-centimeter')

api.augment(unit, def)

module.exports = api[unit]
