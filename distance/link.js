'use strict'

var api = require('../api/distance')

var unit = 'link'

require('../definition/distance/link')

api.augment(unit)

module.exports = api[unit]
