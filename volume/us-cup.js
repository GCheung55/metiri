'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/us-cup')

var unit = 'us-cup'

api.augment(unit, def)

module.exports = api.get(unit)
