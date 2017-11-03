'use strict';

var toetsenbord = require('readline-sync');

var woord;
woord = toetsenbord.question("Geef een woord van minstens 14 karakters: ");
while (woord.length < 14) {
    woord = toetsenbord.question("Dit woord is niet minstens 14 karakters lang.\nGeef een woord: ");
}

