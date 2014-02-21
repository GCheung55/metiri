'use strict'

var api = require('../api/speed')

var unit = 'foot-per-minute'

require('../definition/speed/foot-per-minute')

api.augment(unit)
api.augment(unit, 'foot.per.minute')

module.exports = api[unit]
