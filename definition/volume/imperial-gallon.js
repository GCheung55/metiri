'use strict'

var volume = require('./cubic-meter')

volume.set('imperial-gallon', 'cubic-meter', 1 / 219.9688)

module.exports = volume
