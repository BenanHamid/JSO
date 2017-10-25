'use strict';

var toetsenbord = require('readline-sync');

var hoogte = parseInt(toetsenbord.question("Geef hoogte: "));
var rechteZijde = hoogte * 3;
var result = "";
for (var i = 0; i < rechteZijde; i++) {
    result += "*";
}
result += "\n";
for (var i = 1; i < hoogte - 1; i++) {
    for (var j = 0; j < i; j++) {
        result += " ";
    }
    result += "*";
    for (var j = 1; j < rechteZijde - 1; j++) {
        result += " ";
    }
    result += "*\n";
}
for (var j = 0; j < hoogte - 1; j++) {
    result += " ";
}
for (var i = 0; i < rechteZijde; i++) {
    result += "*";
}
console.log(result);
