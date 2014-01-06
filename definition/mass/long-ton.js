'use strict'

var mass = require('./gram')

mass['long-ton'] = {
	base: 'gram',
	factor: 1 / 9.8420653E-7
}

module.exports = mass
