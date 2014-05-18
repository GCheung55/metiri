'use strict'

var prime = require('prime')
var map = require('mout/object/map')
var merge = require('mout/object/merge')
var set = require('mout/object/set')
var get = require('mout/object/get')
var bind = require('mout/function/bind')
var isArray = require('mout/lang/isArray')
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

var recurse = function(obj, scope){
    return map(obj, function(value, key){
        if (typeof value == 'object') {
            return recurse(value, scope)
        } else {
            return bind(value, scope)
        }
    })
}

var api = function(unit, definitions) {
    var methods = {}
    var u = prime({
        inherits: unit,
        constructor: function(){
            var scope = this

            if ( !(scope instanceof u) ) {
                return new u
            }

            // setting the definitions here so we don't need to pass it around
            u.parent.constructor.call(scope, definitions)

            // copy methods here because we want dot notation accessible methods
            merge(scope, recurse(methods, scope))
        }
    })

    // Expose the methods for testing
    u._methods = methods

    // Expose definitions for testing
    u._definitions = definitions

    u.augment = function(name, path, def) {
        var scope = this

        if (!name) {
            throw new Error('Missing argument: name')
        }

        // Path is the definition
        if (path != undef && (isArray(path))) {
            def = path
            path = undef
        }

        if (path == undef) {
            path = name
        } else {
            path = path.replace(/-/g, '.')
        }

        if (def != undef) {
            definitions.set.apply(definitions, def)
        }

        set(methods, path, implement(name))
        set(scope, path, generic(scope, name))

        return scope
    }

    return u
}

module.exports = api