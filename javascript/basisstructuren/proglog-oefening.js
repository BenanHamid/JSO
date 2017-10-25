'use strict';

var toetsenbord = require('readline-sync');
var bank = toetsenbord.question('Tik de naam van de bank in: ');
var bedrag = parseFloat(toetsenbord.question('Tik je bedrag in: '));
const rente = 4;

if (bank.toUpperCase() == 'KAUPTHING') {
    console.log('Bij Kaupthing kunt u voorlopig uw gelt (' + bedrag + ' EUR) niet opvragen.')
} else {
    console.log('Bij ' + bank + ' bedraagt het rentebedrag ' + rente / 100 + ' EUR. Het totaalbedrag is ' + (bedrag + (rente / 100)) + 'EUR.');
}