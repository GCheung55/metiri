'use strict'

var api = require('../api/volume')

var unit = 'minim'

var def = require('../definition/volume/minim')

api.augment(unit, def)

module.exports = api[unit]
