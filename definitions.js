'use strict'

var prime = require('prime')

module.exports = prime({
    constructor: function(){
        this._defs = {}
    },

    set: function(name, base, factor, zero, validation) {
        var scope = this

        var def = scope._defs[name] = typeof base == 'object' ? base : {
            base: base,
            factor: factor,
            zero: zero,
            validation: validation
        }

        return scope
    },

    get: function(name) {
        return this._defs[name]
    }
})