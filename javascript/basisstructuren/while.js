'use strict';

var toetsenbord = require('readline-sync');
var som = 0;
var getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
while (getal >= 0) {
    som = som + getal;
    getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
}
console.log("De som is %d", som);