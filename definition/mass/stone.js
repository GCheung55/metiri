'use strict'

var mass = require('./gram')

mass['stone'] = {
	base: 'gram',
	factor: 1 / 1.5747304E-4
}

module.exports = mass
