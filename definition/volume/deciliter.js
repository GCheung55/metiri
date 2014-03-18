'use strict'

var volume = require('./cubic-meter')

volume.set('deciliter', 'cubic-meter', 1 / 10000)

module.exports = volume
