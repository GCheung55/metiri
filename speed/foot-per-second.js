'use strict'

var api = require('../api/speed')

var unit = 'foot-per-second'

require('../definition/speed/foot-per-second')

api.augment(unit)
api.augment(unit, 'foot.per.second')

module.exports = api[unit]
