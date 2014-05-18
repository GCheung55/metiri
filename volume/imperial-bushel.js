'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-bushel')

var unit = 'imperial-bushel'

api.augment(unit, def)

module.exports = api.get(unit)
