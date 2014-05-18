'use strict'

var api = require('../api/distance')

var unit = 'fathom'

var def = require('../definition/distance/fathom')

api.augment(unit, def)

module.exports = api[unit]
