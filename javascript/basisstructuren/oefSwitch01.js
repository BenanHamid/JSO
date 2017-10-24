'use strict';

var toetsenbord = require('readline-sync');

var getal1 = parseInt(toetsenbord.question("Geef eerste getal: "), 10);
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