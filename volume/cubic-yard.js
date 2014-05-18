'use strict'

var api = require('../api/volume')

var unit = 'cubic-yard'

var def = require('../definition/volume/cubic-yard')

api.augment(unit, def)

module.exports = api[unit]
