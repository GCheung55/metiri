'use strict'

var unit = require('../unit')
var api = require('../api')
var definitions = require('../definitions')

module.exports = function(){
    return api(unit, new definitions)
}
