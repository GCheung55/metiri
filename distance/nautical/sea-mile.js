'use strict'

var api = require('../../api/distance')

var unit = 'nautical-sea-mile'

var def = require('../../definition/distance/nautical/sea-mile')

api.augment(unit, 'nautical.sea.mile', def)

module.exports = api[unit]
