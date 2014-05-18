'use strict'

var api = require('../api/volume')

var unit = 'cubic-foot'

var def = require('../definition/volume/cubic-foot')

api.augment(unit, def)

module.exports = api[unit]
