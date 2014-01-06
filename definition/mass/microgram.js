'use strict'

var mass = require('./gram')

mass['microgram'] = {
	base: 'gram',
	factor: 1 / 1E6
}

module.exports = mass
