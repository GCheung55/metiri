'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/dry-peck')

var unit = 'dry-peck'

api.augment(unit, def)

module.exports = api.get(unit)
