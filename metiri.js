'use strict'

var metiri = function(type){
	return metiri[type]
}

metiri.mass = require('./mass')
metiri.temperature = require('./temperature')
metiri.distance = require('./distance')
metiri.speed = require('./speed')

module.exports = metiri
