'use strict';

var toetsenbord = require('readline-sync');

const MAXBEDRAG = 20000;
var bank = toetsenbord.question("Geef banknaam: ");
var tmpBedrag = toetsenbord.question("Geef bedrag: ");
var bedrag = parseFloat(tmpBedrag);
if (bank.toUpperCase() != "KAUPTHING" || bedrag < MAXBEDRAG) {
    console.log("%s geeft %d terug", bank, bedrag);
}
else {
    console.log("%s geeft maar %d terug.", bank, MAXBEDRAG);
}