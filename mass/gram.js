'use strict'

var api = require('../api/mass')

var unit = 'gram'

var def = require('../definition/mass/gram')

api.augment(unit, def)

module.exports = api[unit]
