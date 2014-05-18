'use strict'

var api = require('../api/volume')

var unit = 'hectoliter'

var def = require('../definition/volume/hectoliter')

api.augment(unit, def)

module.exports = api[unit]
