'use strict'

var api = require('../api/distance')

var unit = 'survey-foot'

require('../definition/distance/survey-foot')

api.augment(unit)
api.augment(unit, 'survey.foot')

module.exports = api[unit]
