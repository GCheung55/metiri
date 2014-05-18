'use strict'

var api = require('../api/temperature')

var celsius = 'celsius'

var def = require('../definition/temperature/celsius')

api.augment(celsius, def)

module.exports = api[celsius]
