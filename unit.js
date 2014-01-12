'use strict';

var prime = require('prime')

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

        var scope = this
        var value = scope._value
        var from = scope._from
        var factor = from.factor
        var def = scope.definition[from]
        var sign = ''

        if (!isFinite(value) || value == 0) {
            return value.toString()
        }

        if (value < 0) {
            sign = '-'
            value = -value
        }

        if (factor && 1E-10 > value) {
            return '0'
        }

        var c = Math.floor(Math.log(value) / Math.LN10) - significantDigits + 1

        if (!isFinite(c)) {
            return sign + value
        }

        value = String( Math.round(value / Math.pow(10, c)))

        if (15 < c + value.length - 1) {
            value += 'e+' + (c + value.length - 1)
            value = value.replace(/^([0-9])/, '$1.')
        } else if (-15 > c + value.length - 1) {
            value += 'e' + (c + value.length - 1)
            value = value.replace(/^([0-9])/, '$1.')
        } else if (c >= 0) {
            for (c; 0 < c; c--) {
                value += '0'
            }
        } else if (c = value.length - -c, c > 0) {
            value = value.substr(0, c) + '.' + value.substring(c)
        } else {
            for (c; c < 0; c++) {
                value = '0' + value
            }

            value = '0.' + value
        }

        value = value.replace(/([1-9])0+e/, "$1e")
        value = value.replace(/(\.[0-9]*[1-9])0+$/, "$1")
        value = value.replace(/\.0+$/, "")

        return Number(sign + value)
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
            // return scope.compute(scope._value, scope._from, scope._to)
        }
        
        // return scope
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
