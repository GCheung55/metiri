'use strict'

var volume = require('./cubic-meter')

volume.set('cubic-millimeter', 'cubic-meter', 1 / 1000000000)

module.exports = volume
