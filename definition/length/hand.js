'use strict'

var length = require('./centimeter')

length['hand'] = {
	base: 'centimeter',
	factor: 1 / 0.098425197
}

module.exports = length
