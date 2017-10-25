'use strict';

var toetsenbord = require('readline-sync');
var result = "*\n";
var rhZijde = parseInt(toetsenbord.question("Geef rechtshoekszijde: "));
for (var i = 1; i < rhZijde - 1; i++) {
    result += "*";
    for (var j = 0; j < i - 1; j++) {
        result += " ";
    }
    result += "*\n";
}
for (var i = 0; i < rhZijde; i++) {
    result += "*";
}
result += "\n";
console.log(result);
