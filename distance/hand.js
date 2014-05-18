'use strict'

var api = require('../api/distance')

var unit = 'hand'

var def = require('../definition/distance/hand')

api.augment(unit, def)

module.exports = api[unit]
