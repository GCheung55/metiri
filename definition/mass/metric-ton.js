'use strict'

var mass = require('./gram')

mass['metric-ton'] = {
	base: 'gram',
	factor: 1E6
}

module.exports = mass
