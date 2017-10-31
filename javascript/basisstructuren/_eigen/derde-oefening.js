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

/* 'use strict';

var toetsenbord = require('readline-sync');

var getal1 = parseInt(toetsenbord.question("Geef eerste getal: "), 10); //10 - radix (van 0 tot 9)
var getal2 = parseInt(toetsenbord.question("Geef tweede getal: "), 10);
var operator = toetsenbord.question("Geef bewerking (+,-,* of /): ");
switch (operator) {
    case "+":
        console.log("De som is " + (getal1 + getal2));
        break;
    case "-":
        console.log("Het verschil is " + (getal1 - getal2));
        break;
    case "*":
        console.log("Het product is " + (getal1 * getal2));
        break;
    case "/":
        console.log("Het quotient is " + (getal1 / getal2));
        break;
    default:
        console.log("Deze bewerking ken ik niet");
}

// За повече информация за radix-а https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt */