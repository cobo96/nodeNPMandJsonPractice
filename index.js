var lodash = require('lodash');
var jsonfile = require('jsonfile')

var file = 'data.json'
jsonfile.readFile(file, function(err, person) {

    lodash.forEach(person.items[0], function(value) {
        console.log(value);

    });

    lodash.forEach(person.items[1], function(value) {
        console.log(value);

    });
});
