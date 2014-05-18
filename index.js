'use strict'

exports.mass = require('./mass')

exports.temperature = require('./temperature')

exports.distance = require('./distance')

exports.speed = require('./speed')

exports.area = require('./area')

exports.pressure = require('./pressure')

exports.time = require('./time')

exports.volume = require('./volume')

/**
 * Helper function to augment a specific converter with additional conversions
 * @param  {String} type            Converter type to augment (mass, speed, temperature... etc)
 * @param  {String} unitName        Name of unit, should correspond to the definitions name
 * @param  {String | Array} path    String: Location to access the conversion method, Array: The conversion definition
 * @param  {Array} def              The conversion definition
 * @return {Object}                 Itself...
 */
exports.augment = function(type, unitName, path, def) {
    var scope = this
    var converter

    if (!type) {
        throw new Error('Missing argument: type')
    }

    // Type doesn't exist, stop here
    if ( !(type in scope) ) {
        throw new Error (type + ' does not exist')
    }

    converter = scope[type]
    converter.augment(unitName, path, def)

    return scope
}