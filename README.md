metiri
======

Simple unit conversion utility.

Supported conversions:
* area
* distance
* mass
* pressure
* speed
* temperature
* time

## Main Goals ##
* Have a simple API
* Be easy to maintain
* Be modular
* Be compatible with other frameworks
* Be unit tested
* Work in multiple environments (IE6+, modern browsers, node.js)

## To Use ##
__node.js__
```javascript
var metiri = require('metiri')

metiri.mass.gram(1000).kilogram().value() // 1
metiri.mass.gram(1000).kilogram().gram().value() // 1000
```

## Todo ##
* Support general volume conversion
* Switch mass base unit (gram) to SI unit (kilogram)
* Documentation
* Support other area units:
    * ancient-roman, chinese, japanese, natural, old-french, old-russian, old-spanish, thai
* Support other distance units:
    * ancient-greek, ancient-roman, astronomical, biblical, chinese, computer-equipment, geographical, japanese, nautical, old-french, old-russian, old-spanish-portuguese, optical, thai, typographical-ata, typographical-didot
* Support other mass units:
    * ancient-greek, ancient-roman, apothecaries, bahai-faith, biblical, chinese, hong-kong, japanese, old-french, old-german, old-russian, thai, troy 
* Support other pressure units: 
    * atmosphere, mercury, natural, water

## Credits/Influences ##
* [convert-me.com](http://www.convert-me.com/)
* [MeasurementJs](https://github.com/Philzen/measurement.js)
* [Michael Kedzierski](https://github.com/ycros) - API suggestions

## License ##
Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).