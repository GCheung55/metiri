'use strict';

var prime = require('prime')

var enforcePrecision = require('mout/number/enforcePrecision')

var unit = prime({
    constructor: function(definition) {
        var scope = this
        scope.definition = definition || {}
        scope._value = scope._from = scope._to = undefined
        return scope
    },

    value: function() {
        return this._value
    },

    round: function(significantDigits) {
        // default significant digits
        significantDigits = significantDigits != undefined ? significantDigits : 4

        var value = this._value

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

        return scope._value != undefined && from != undefined && to != undefined && from != to
    },

    convert: function(value) {
        var scope = this
        scope._value = value

        scope._compute()

        return scope
    },

    from: function(from) {
        var scope = this
        scope._from = from

        scope._compute()

        return scope
    },

    to: function(to) {
        var scope = this
        scope._to = to

        scope._compute()

        return scope
    },

    _compute: function() {
        var scope = this
        var value

        if (scope.check()) {
            value = scope.compute(scope._value, scope._from, scope._to)
            
            if (value != scope._value) {
                scope._value = value
            }
        }
    },

    compute: function(value, fromType, toType) {
        var scope = this
        var defs = scope.definition
        var inputDef = defs[fromType]
        var outputDef = defs[toType]
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
