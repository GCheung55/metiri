'use strict'
/**
 * Basic API factory for combining unit and definition
 * @param  {Object} unit       [description]
 * @param  {Object} definition [description]
 * @return {Function}            [description]
 */
var api = function(unit, definition) {

	// Create return obj containing the api
	var ret = {
		// Set for testing
		_unit: unit,

		// Set for testing
		_definition: definition,

		_nCtor: function() {
			return new unit(definition)
		},

		/**
		 * Set the `value` to convert on a new unit instance
		 * @param  {[type]} value [description]
		 * @return {Object}       [description]
		 */
		convert: function(value) {
			return ret._nCtor().convert(value)
		},

		/**
		 * Set the `from` type to convert from on a new unit instance
		 * @param  {String} from [description]
		 * @return {Object}      [description]
		 */
		from: function(from) {
			return ret._nCtor().from(from)
		},

		/**
		 * Set the `to` type to convert to on a new unit instance
		 * @param  {String} to [description]
		 * @return {Object}    [description]
		 */
		to: function(to) {
			return ret._nCtor().to(to)
		}
	}

	return function(v) {
		if (v) {
			return ret.convert(v)
		}

		return ret
	}
}

module.exports = api