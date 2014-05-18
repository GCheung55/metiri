'use strict'

var api = require('../api/volume')

var unit = 'cubic-meter'

var def = require('../definition/volume/cubic-meter')

api.augment(unit, def)

module.exports = api[unit]
