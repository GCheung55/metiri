'use strict'

var volume = require('./cubic-meter')

volume.set('cubic-yard', 'cubic-meter', 1 / 1.3079506)

module.exports = volume
