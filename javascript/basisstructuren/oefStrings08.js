'use strict';

var toetsenbord = require('readline-sync');

function belgischeNaam(voornaam, achternaam) {
    return achternaam + ", " + voornaam;
}

function nederlandseNaam(voornaam, achternaam) {
    return gesplitsteNaam(achternaam) + ", " + voornaam;
}

function gesplitsteNaam(naam) {
    var laatsteSpatie = naam.lastIndexOf(' ');
    var result = naam;
    if (laatsteSpatie != -1) {
        result = naam.substring(laatsteSpatie + 1) + ", " +
            naam.substring(0, laatsteSpatie);
    }
    return result;
}

var naam = toetsenbord.question("naam: ");
var voornaam = toetsenbord.question("voornaam: ");
console.log("Belgisch formaat: %s", belgischeNaam(voornaam, naam));
console.log("Nederlands formaat: %s", nederlandseNaam(voornaam, naam));
