'use strict';

var toetsenbord = require('readline-sync');
var sterren = parseInt(toetsenbord.question('Hoeveel sterren heb je nodig: '));
var i = 1;
var y = 0;
var t = '\t';

for(i = 1; i <= sterren; i++) {
        console.log(t.repeat(y++) + '*');
}