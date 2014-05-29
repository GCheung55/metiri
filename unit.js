'use strict';

var prime = require('prime')

var enforcePrecision = require('mout/number/enforcePrecision')

var unit = prime({
    constructor: function(definitions) {
        var scope = this
        scope.definitions = definitions || {}
        scope._origVal = scope._from = scope._to = undefined
        return scope
    },

    value: function() {
        var scope = this

        return scope._compute()
    },

    round: function(significantDigits) {
        var value = this._compute()

        // default significant digits
        significantDigits = significantDigits != undefined ? significantDigits : 4

        if (!isFinite(value) || value == 0) {
            return value
        }

        return enforcePrecision(value, significantDigits)
    },

    // valueOf: function() {
    //     return this._value
    // },

    // toString: function() {
    //     var scope = this
    //     var value = scope._value
    //     return value != undefined || value != NaN || value != null ? value.toString() : value
    // },

    check: function() {
        var scope = this
        var from = scope._from
        var to = scope._to

        return scope._origVal != undefined && from != undefined && to != undefined
    },

    create: function(value, from, to){
        var u = new unit(this.definitions)

        u._origVal = value
        u._from = from
        u._to = to

        return u
    },

    convert: function(value) {
        var scope = this
        var len = arguments.length

        if (len) {
            scope._origVal = value
        } else {
            scope = scope._origVal
        }

        return scope
    },

    from: function(from) {
        var scope = this
        var len = arguments.length

        if (len) {
            scope._from = from
        } else {
            scope = scope._from
        }

        return scope
    },

    to: function(to) {
        var scope = this
        var len = arguments.length

        if (len) {
            scope._to = to
        } else {
            scope = scope._to
        }

        return scope
    },

    _compute: function() {
        var scope = this
        var from = scope._from
        var to = scope._to
        var origVal = scope._origVal
        var value

        if (scope.check()) {
            if (from == to) {
                value = origVal
            } else {
                value = scope.compute(origVal, from, to)
            }
        } else {
            throw new Error('Missing properties. Cannot compute.')
        }

        return value
    },

    compute: function(value, fromType, toType) {
        var scope = this
        var defs = scope.definitions
        var inputDef = defs.get(fromType)
        var outputDef = defs.get(toType)
        var baseType, baseValue, factor, inputZero, outputZero

        if (toType === inputDef.base || fromType === outputDef.base) {
            if ((inputZero = inputDef.zero) != undefined) {
                value -= inputZero
            }

            if (toType === inputDef.base) {
                factor = inputDef.factor

                if (typeof factor === 'function') {
                    return factor(value)
                }

                value *= factor
            } else if (fromType === outputDef.base) {
                factor = outputDef.factor

                if (typeof factor === 'function') {
                    return factor(value)
                }

                value /= factor
            } 

            if ((outputZero = outputDef.zero) != undefined) {
                value += outputZero
            }

            return value
        } else {
            // We're here b/c neither input nor out type is base type to which we could directly convert

            /**
             * TODO use direct reconversion factors, while trading off the higher accuracy / performance
             * vs. larger configuration array/file size
             */
            baseType = inputDef.base || outputDef.base

            if (baseType) {             

                if (baseType === inputDef.base) {
                    baseValue = scope.compute(value, fromType, fromType = inputDef.base)
                    // fromType = inputDef.base
                } else if (baseType === outputDef.base) {
                    baseValue = scope.compute(value, toType, toType = outputDef.base)
                    // toType = outputDef.base
                }

                return scope.compute(baseValue, fromType, toType)
            }
        }

        return false
    }
})

module.exports = unit
