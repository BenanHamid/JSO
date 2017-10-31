'use strict';

var toetsenbord = require('readline-sync');

function discriminant(a, b, c){
    return b*b - 4*a*c; 
}

function aantalNulpunten(a,b,c){
    var d = discriminant(a,b,c);
    return d > 0 ? 2 : d == 0 ? 1: 0;
}

var a = toetsenbord.question("a: ");
var b = toetsenbord.question("b: ");
var c = toetsenbord.question("c: ");
console.log("de discriminant van de vgl %dx*x + %dx + %d = %d", a,b,c,discriminant(a,b,c));
console.log("deze vgl heeft %d nulpunten", aantalNulpunten(a,b,c));

