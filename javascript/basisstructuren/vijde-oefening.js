'use strict'

var toetsenbord = require('readline-sync');
var getal = parseInt(toetsenbord.question('Geef geheen getal: '), 10);
var som = 0;
var nummer = 0;

if (getal >= 0) {
    while (getal >= 0) {
        nummer++;
        som = som + getal;
        getal = parseInt(toetsenbord.question("Geef geheel getal: "), 10);
    }
    console.log(som / nummer);
} else {
    console.log('Dit is geen geheel getal!');
}