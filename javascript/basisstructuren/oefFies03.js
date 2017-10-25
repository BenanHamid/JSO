'use strict';

function celsius(f){
    return 5.0 / 9.0 * (f - 32);
}

function fahrenheit(c){
    return 9.0 / 5.0 * c + 32;
}

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Geef een getal:');
getal = parseFloat(getal);
console.log("%d graden Celsius = %d graden Fahrenheit", getal, fahrenheit(getal));
console.log("%d graden Fahrenheit = %d graden Celsius", getal, celsius(getal));