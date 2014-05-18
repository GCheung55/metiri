'use strict'

var api = require('../api/distance')

var unit = 'survey-foot'

var def = require('../definition/distance/survey-foot')

api.augment(unit, def)
api.augment(unit, 'survey.foot')

module.exports = api[unit]
