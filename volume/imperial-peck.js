'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-peck')

var unit = 'imperial-peck'

api.augment(unit, def)

module.exports = api.get(unit)
