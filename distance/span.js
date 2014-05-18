'use strict'

var api = require('../api/distance')

var unit = 'span'

var def = require('../definition/distance/span')

api.augment(unit, def)

module.exports = api[unit]
