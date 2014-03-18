'use strict'

var volume = require('./cubic-meter')

volume.set('cubic-foot', 'cubic-meter', 1 / 35.314667)

module.exports = volume
