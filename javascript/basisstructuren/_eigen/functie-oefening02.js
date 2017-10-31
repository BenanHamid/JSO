'use strict';

var euro;
const bef = 40.3399;

var toetsenbord = require('readline-sync');

function euroNaarBef(euro) {
    var eurobef;
    eurobef = (euro) * bef;
    return eurobef;
}

function befNaarEuro(beref) {
    var befeuro
    befeuro = ((beref) / bef)
    return befeuro; 
}

var getal1 = parseFloat(toetsenbord.question('Tik je getal in euro in: '))
var getal2 = parseFloat(toetsenbord.question('Tik je getal in bef in: '))

console.log(euroNaarBef(getal1) + ' BEF');
console.log(befNaarEuro(getal2) + ' Euro');
