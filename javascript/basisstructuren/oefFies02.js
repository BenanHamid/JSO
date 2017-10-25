'use strict';

var toetsenbord = require('readline-sync');
const WISSELKOERS = 40.3399;

var prijs_brood, prijs_melk;

function BEFNaarEuro(bedrag) {
    var resultaat = bedrag / WISSELKOERS;
    return resultaat;
}

function EuroNaarBEF(bedrag) {
    return bedrag * WISSELKOERS;
}

prijs_brood = toetsenbord.question("Tik de prijs (EUR) van een brood in: ");
prijs_brood = parseFloat(prijs_brood);
console.log("Voor 01/01/2002 kostte dat brood %d BEF.",EuroNaarBEF(prijs_brood));
prijs_melk = toetsenbord.question("Tik de prijs (EUR) van een liter melk in:");
prijs_melk = parseFloat(prijs_melk);
console.log("Voor 01/01/2002 kostte die melk %d BEF.", EuroNaarBEF(prijs_melk));