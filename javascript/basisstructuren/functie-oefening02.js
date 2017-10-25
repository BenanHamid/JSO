'use strict';

var euro;
const bef = 40.3399;

var toetsenbord = require('readline-sync');

function euroNaarBef(euro) {
    var eurobef;
    eurobef = (getal1 + getal2) * bef;
    return eurobef;
}

function befNaarEuro(beref) {
    var befeuro
    befeuro = ((getal1 + getal2) / bef)
    return befeuro; 
}

var getal1 = parseFloat(toetsenbord.question('Tik de prijs van het brood in: '))
var getal2 = parseFloat(toetsenbord.question('Tik de prijs van de melk in: '))

console.log(euroNaarBef(getal1, getal2) + ' BEF');
console.log(befNaarEuro(getal1, getal2) + ' Euro');
