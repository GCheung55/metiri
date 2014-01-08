'use strict'

var prime = require('prime')

module.exports = prime({
	set: function(name, base, factor, zero, validation, symbol) {
		var scope = this

		scope[name] = {
			base: base,
			factor: factor,
			zero: zero,
			validation: validation,
			symbol: symbol
		}

		return scope
	},

	get: function(name) {
		return this[name]
	}
})