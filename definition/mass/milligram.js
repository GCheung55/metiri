'use strict'

var mass = require('./gram')

mass['milligram'] = {
	base: 'gram',
	factor: 1 / 1E3
}

module.exports = mass
