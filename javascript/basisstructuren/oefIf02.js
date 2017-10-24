'use strict';

var toetsenbord = require('readline-sync');

var naam = toetsenbord.question("Naam: ");
var leeftijd = toetsenbord.question("Leeftijd: ");
if (leeftijd > 14) {
    console.log("Sorry, deze pagina is enkel voor kinderen bestemd");
}
else {
    console.log("Welkom, %s!", naam);
}