'use strict';

var toetsenbord = require('readline-sync');

var namen = new Array(5);

for(var i=0; i<namen.length; i++){
    namen[i] = toetsenbord.question("Geef een tekst: ");
}

console.log(namen.sort());