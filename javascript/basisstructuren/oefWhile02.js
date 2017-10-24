'use strict';

var toetsenbord = require('readline-sync');
var a = parseInt(toetsenbord.question('a: '));
var b = parseInt(toetsenbord.question('b: '));
var result = "De grootste gemene deler van " + a + " en " + b + " is ";
while (a != b) {
    if (a > b) a -= b;
    else b -= a;
}
result += a;
console.log(result);