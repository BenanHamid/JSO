'use strict';

var toetsenbord = require('readline-sync');
var som = 0, aantal = 0;
var getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
while (getal >= 0) {
    aantal++;
    som += getal;
    getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
}
if (aantal > 0) {
    console.log("Het gemiddelde = %d", som / aantal);
}
else {
    console.log("Er zijn geen getallen ingevoerd.");
}