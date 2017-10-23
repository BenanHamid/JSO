'use strict';

var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question("Geef eerste getal: ");
var getal2 = toetsenbord.question("Geef tweede getal: ");
console.log("Het product van %d  en %d is %d", getal1, getal2, getal1 * getal2);