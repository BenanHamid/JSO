'use strict';

var toetsenbord = require('readline-sync');

var adres;
adres = toetsenbord.question("Geef een e-mail adres:");
while (adres.indexOf("@") == -1) {
    adres = toetsenbord.question("Dit is geen geldig e-mail adres \nGeef een e-mail adres: ");
}
