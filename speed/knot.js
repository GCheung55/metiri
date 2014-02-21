'use strict'

var api = require('../api/speed')

var unit = 'knot'

require('../definition/speed/knot')

api.augment(unit)

module.exports = api[unit]
