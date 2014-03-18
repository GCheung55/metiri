'use strict'

var volume = require('./cubic-meter')

volume.set('hectoliter', 'cubic-meter', 1 / 10)

module.exports = volume
