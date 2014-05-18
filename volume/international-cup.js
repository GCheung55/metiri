'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/international-cup')

var unit = 'international-cup'

api.augment(unit, def)

module.exports = api.get(unit)
