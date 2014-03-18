'use strict'

var volume = require('./cubic-meter')

volume.set('centiliter', 'cubic-meter', 1 / 100000)

module.exports = volume
