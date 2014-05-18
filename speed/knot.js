'use strict'

var api = require('../api/speed')

var unit = 'knot'

var def = require('../definition/speed/knot')

api.augment(unit, def)

module.exports = api[unit]
