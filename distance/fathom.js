'use strict'

var api = require('../api/distance')

var unit = 'fathom'

require('../definition/distance/fathom')

api.augment(unit)

module.exports = api[unit]
