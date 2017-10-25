'use strict';

var toetsenbord = require('readline-sync');
var bank = toetsenbord.question('Tik de naam van de bank in: ');
var bedrag = parseFloat(toetsenbord.question('Tik je bedrag in: '));

if (bank.toUpperCase() == 'KAUPTHING') {
    if(bedrag > 20000){
        console.log(bank + ' geeft maar 25000 EUR terug')
    } else {
        console.log(bank + ' geeft ' + bedrag + ' EUR terug')
    }
} else {
    console.log(bank + ' geeft ' + bedrag + ' EUR terug');
}