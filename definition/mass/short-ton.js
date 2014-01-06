'use strict'

var mass = require('./gram')

mass['short-ton'] = {
	base: 'gram',
	factor: 1 / 1.1023113E-6
}

module.exports = mass
