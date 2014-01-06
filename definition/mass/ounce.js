'use strict'

var mass = require('./gram')

mass['ounce'] = {
	base: 'gram',
	factor: 1 / .035273962
}

module.exports = mass
