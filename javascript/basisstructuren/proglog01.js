'use strict';

var toetsenbord = require('readline-sync');

var bank = toetsenbord.question("Geef banknaam: ");
var tmpBedrag = toetsenbord.question("Geef bedrag: ");
var bedrag = parseFloat(tmpBedrag);
var rente = bedrag * 0.04;
var totaalbedrag = bedrag + rente;
console.log("Bij %s bedraagt het rentebedrag EUR %d. Het totaalbedrag is EUR %d.", bank, rente, totaalbedrag);
