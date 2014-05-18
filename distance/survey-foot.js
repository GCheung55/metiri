'use strict'

var api = require('../api/distance')
var def = require('../definition/distance/survey-foot')

var unit = 'survey-foot'

api.augment(unit, def)

module.exports = api.get(unit)
