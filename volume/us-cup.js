'use strict'

var api = require('../api/volume')

var unit = 'us-cup'

var def = require('../definition/volume/us-cup')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
