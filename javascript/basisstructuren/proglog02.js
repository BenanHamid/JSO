'use strict';

var toetsenbord = require('readline-sync');

var bank = toetsenbord.question("Geef banknaam: ");
var tmpBedrag = toetsenbord.question("Geef bedrag: ");
var bedrag = parseFloat(tmpBedrag);
if (bank != "Kaupthing") {  // hoofdlettergevoelig!
    var rente = bedrag * 0.04;
    var totaalbedrag = bedrag + rente;
    console.log("Bij %s bedraagt het rentebedrag EUR %d. Het totaalbedrag is EUR %d.", bank, rente, totaalbedrag);
}
else {
    console.log("U kunt uw geld (EUR %d) voorlopig niet opvragen.", bedrag);
}