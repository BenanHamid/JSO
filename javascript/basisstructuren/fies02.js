'use strict';

var toetsenbord = require('readline-sync');

function schuineZijde(a, b) {
    return Math.sqrt(a * a + b * b);
}

var a = toetsenbord.question("a: ");
var b = toetsenbord.question("b: ");
console.log("De schuine zijde van een rechthoekige driehoek met rechthoekszijden %d en %d is %d",
    a, b, schuineZijde(a, b));
