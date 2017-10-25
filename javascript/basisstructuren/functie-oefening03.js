'use strict';

var toetsenbord = require('readline-sync');

function celsius(getal) {
    var cels;
    cels = 5.0 / 9.0 * (getal - 32)
    return cels;
}

function fahrenheit(getal) {
    var fahr;
    fahr = 9.0 / 5.0 * getal + 32
    return fahr
}

var getal = parseFloat(toetsenbord.question('Geef een getal: '));
console.log ('Je getal in ' + celsius(getal) + 'C');
console.log ('Je getal in ' + fahrenheit(getal) + 'F');