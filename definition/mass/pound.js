'use strict'

var mass = require('./gram')

mass['pound'] = {
	base: 'gram',
	factor: 1 / 2.2046226E-3
}

module.exports = mass
