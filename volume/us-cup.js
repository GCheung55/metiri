'use strict'

var api = require('../api/volume')

var unit = 'us-cup'

var def = require('../definition/volume/us-cup')

api.augment(unit, def)

module.exports = api[unit]
