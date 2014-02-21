'use strict'

var api = require('../api/mass')

var unit = 'ounce'

require('../definition/mass/ounce')

api.augment(unit)

module.exports = api[unit]
