'use strict';

var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question("Geef loon: ");
var getal2 = toetsenbord.question("Geef verhoging: ");
console.log("het nieuwe loon is %d.", parseFloat(getal1) + parseFloat(getal2));