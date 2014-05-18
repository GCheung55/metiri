'use strict'

var api = require('../api/volume')

var unit = 'cubic-millimeter'

var def = require('../definition/volume/cubic-millimeter')

api.augment(unit, def)

module.exports = api[unit]
