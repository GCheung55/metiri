'use strict'

var prime = require('prime')
var forOwn = require('mout/object/forOwn')
var undef

var implement = function(name) {
    return function(value) {
        var scope = this
        var from = name
        var to = name

        // If value is undefined, then we're converting to the next
        if (value == undef && scope.check()) {
            from = scope.to()
            value = scope.value()
        }

        scope.convert(value)
        scope.from(from)
        scope.to(to)

        return scope
    }
}

var generic = function(u, name) {
    return function(value) {
        var uu = u()

        if (value != undef) {
            uu.convert(value)
        }

        uu.from(name)
        uu.to(name)

        return uu
    }
}

var augment = function(name) {
    var scope = this
    var obj = {}

    obj[name] = implement(name)

    scope.implement(obj)
    scope[name] = generic(scope, name)

    return scope
}

var api = function(unit, definitions) {
    var u = prime({
        inherits: unit,
        constructor: function(){
            if ( !(this instanceof u) ) {
                return new u
            }

            // setting the definitions here so we don't need to pass it around
            u.parent.constructor.call(this, definitions)
        }
    })

    u.augment = augment

    return u
}

module.exports = api