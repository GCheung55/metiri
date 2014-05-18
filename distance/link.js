'use strict'

var api = require('../api/distance')

var unit = 'link'

var def = require('../definition/distance/link')

api.augment(unit, def)

module.exports = api[unit]
