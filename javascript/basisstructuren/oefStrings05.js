'use strict';

var toetsenbord = require('readline-sync');

var tekst = toetsenbord.question("Geef een tekst: ");
var nieuweTekst = "";
for (var i = 0; i < tekst.length; i++) {
    switch (tekst.charAt(i)) {
        case "g":
            nieuweTekst = nieuweTekst + "h";
            break;
        case "G":
            nieuweTekst = nieuweTekst + "H";
            break;
        case "h":
            nieuweTekst = nieuweTekst + "g";
            break;
        case "H":
            nieuweTekst = nieuweTekst + "G";
            break;
        default:
            nieuweTekst = nieuweTekst + tekst.charAt(i);
            break;
    }
}
console.log("De vertaalde tekst is %s", nieuweTekst);