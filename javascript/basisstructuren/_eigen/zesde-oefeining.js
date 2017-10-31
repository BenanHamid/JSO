'use strict';

var toetsenbord = require('readline-sync');
var getal1 = parseInt(toetsenbord.question('Geef getal1: '), 10);
var getal2 = parseInt(toetsenbord.question('Geef getal2: '), 10);


if (getal1 >= 0 && getal2 >= 0) {
    while (getal1 != getal2) {
        if (getal1 > getal2) {
            getal1 -= getal2
        } else if (getal1 < getal2) {
            getal2 -= getal1
        }
    }
    console.log(getal1)
} else {
    console.log('Geef een geheel getal!')
}