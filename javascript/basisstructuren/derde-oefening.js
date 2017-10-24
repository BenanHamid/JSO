'use strict';

var toetsenbord = require('readline-sync');
var getal1 = toetsenbord.question('Tik je eerste gehele getal in: ');
var getal2 = toetsenbord.question('Tik je tweede gehele getal in: ');
var operator = toetsenbord.question('Tik je operator in: ');

switch (operator) {
    case (operator = '+'):
        console.log('Het resultat van %s en %s is', getal1, getal2, parseInt(getal1) + parseInt(getal2));
        break;
    case (operator = '-'):
        console.log('Het resultat van %s en %s is', getal1, getal2, parseInt(getal1) - parseInt(getal2));
        break;
    case (operator = '*'):
        console.log('Het resultat van %s en %s is', getal1, getal2, parseInt(getal1) * parseInt(getal2));
        break;
    case (operator = '/'):
        console.log('Het resultat van %s en %s is', getal1, getal2, parseInt(getal1) / parseInt(getal2));
        break;
    default: 
        console.log('Deze bewerking ken ik niet!')
        break;
}