'use strict'

var api = require('../api/mass')

var unit = 'pound'

require('../definition/mass/pound')

api.augment(unit)

module.exports = api[unit]
