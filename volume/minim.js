'use strict'

var api = require('../api/volume')

var unit = 'minim'

require('../definition/volume/minim')

api.augment(unit)

module.exports = api[unit]
