'use strict'

var api = require('../api/mass')

var unit = 'gram'

require('../definition/mass/gram')

api.augment(unit)

module.exports = api[unit]
