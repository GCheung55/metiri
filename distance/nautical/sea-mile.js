'use strict'

var api = require('../../api/distance')
var def = require('../../definition/distance/nautical/sea-mile')

var unit = 'nautical-sea-mile'

api.augment(unit, def)

module.exports = api.get(unit)
