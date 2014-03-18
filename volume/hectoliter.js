'use strict'

var api = require('../api/volume')

var unit = 'hectoliter'

require('../definition/volume/hectoliter')

api.augment(unit)

module.exports = api[unit]
