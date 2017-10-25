'use strict';

var toetsenbord = require('readline-sync');
const WISSELKOERS = 40.3399; //изписано е с  главни букви, за да се забележи, че е константа

var prijs_brood, prijs_melk;

function BEFNaarEuro(bedrag) {
    var resultaat = bedrag / WISSELKOERS; // може направо да се коминира стъпка 1 и 2, както в случая
    return resultaat;
}

function EuroNaarBEF(bedrag) {
    return bedrag * WISSELKOERS; // в слуачае е обикновено умножение, затова направо се премине в и да се стъпка 3 
}

prijs_brood = toetsenbord.question("Tik de prijs (EUR) van een brood in: ");
prijs_brood = parseFloat(prijs_brood);
console.log("Voor 01/01/2002 kostte dat brood %d BEF.",EuroNaarBEF(prijs_brood));
prijs_melk = toetsenbord.question("Tik de prijs (EUR) van een liter melk in:");
prijs_melk = parseFloat(prijs_melk);
console.log("Voor 01/01/2002 kostte die melk %d BEF.", EuroNaarBEF(prijs_melk));