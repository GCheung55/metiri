'use strict'

var api = require('../../api/distance')

var unit = 'nautical-sea-mile'

require('../../definition/distance/nautical/sea-mile')

api.augment(unit, 'nautical.sea.mile')

module.exports = api[unit]
