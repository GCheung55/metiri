'use strict'

var metiri = function(type){
	return metiri[type]
}

metiri.mass = require('./api/mass')
metiri.temperature = require('./api/temperature')
metiri.distance = require('./api/distance')
metiri.speed = require('./api/speed')

module.exports = metiri
