'use strict';

var toetsenbord = require('readline-sync');

const MAXIMUMBEDRAG = 100;
const FORTISSTARTPRIJS = 3.75;
var fortisPrijs = FORTISSTARTPRIJS;
var alGekocht = 0.0;
var totaalAantal = 0;
var huidigeWaarde = 0.0;
do {
    var aantal = parseInt(toetsenbord.question("Geef aantal: "));
    alGekocht += aantal * fortisPrijs;
    totaalAantal += aantal;
    huidigeWaarde = totaalAantal * fortisPrijs;
    console.log("U heeft al gekocht voor %d EUR.", alGekocht);
    console.log("De huidige waarde van uw portefeuille is: %d", huidigeWaarde);
    fortisPrijs -= .10;

} while (alGekocht < MAXIMUMBEDRAG);
console.log("Uw geld is op.");
