'use strict'

var mass = require('./gram')

mass['kilogram'] = {
	base: 'gram',
	factor: 1E3
}

module.exports = mass
