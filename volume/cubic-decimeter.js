'use strict'

var api = require('../api/volume')

var unit = 'cubic-decimeter'

var def = require('../definition/volume/cubic-decimeter')

api.augment(unit, def)

module.exports = api[unit]
