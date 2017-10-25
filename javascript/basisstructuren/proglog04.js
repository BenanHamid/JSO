'use strict';

var toetsenbord = require('readline-sync');

var aantal = parseInt(toetsenbord.question("Geef aantal: "));
var result = "";
for (var i = 0; i < aantal; i++) {
    for (var j = 0; j < i; j++) {
        result += " ";
    }
    result += "*\n";
}
console.log(result);

// of:
var spaties = "";
for (var rij = 1; rij <= aantal; rij++) {
    console.log(spaties + "*");
    spaties += " ";
}