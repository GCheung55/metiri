'use strict'

var api = require('../api/speed')

var unit = 'foot-per-minute'

var def = require('../definition/speed/foot-per-minute')

api.augment(unit, def)
api.augment(unit, 'foot.per.minute')

module.exports = api[unit]
