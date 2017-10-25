'use strict';

var toetsenbord = require('readline-sync');

const MAXIMUM = 100;
const FORTISPRIJS = 3.75;
var alGekocht = 0.0;
do {
    var aantal = parseInt(toetsenbord.question("Geef aantal aandelen: "));
    alGekocht += aantal * FORTISPRIJS;
    console.log("U heeft al gekocht voor %d EUR.", alGekocht);
} while (alGekocht < MAXIMUM);
console.log("Uw geld is op.");