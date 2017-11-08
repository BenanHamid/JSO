'use strict';

var toetsenbord = require('readline-sync');
var teller = 10;
var naam;

var namen = [];
naam = toetsenbord.question('Geen een naam in: ');

do {

    naam = toetsenbord.question('Geen een naam in: ');
    namen.push(naam);

} while (namen.length < teller);

do {

    naam = toetsenbord.question('Geen een naam in: ');
    namen.push(naam);

} while (naam.indexOf('') > -1);


console.log(namen);