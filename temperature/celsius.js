'use strict'

var api = require('../api/temperature')

var celsius = 'celsius'

require('../definition/temperature/celsius')

api.augment(celsius)

module.exports = api[celsius]
