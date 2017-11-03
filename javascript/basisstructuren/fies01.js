'use strict';

var toetsenbord = require('readline-sync');

function oppCirkel(r) {
    return Math.PI * r * r;
}

function omtrekCirkel(r) {
    return 2 * Math.PI * r;
}

var straal = toetsenbord.question("straal: ");
console.log("opp van een cirkel met straal %d is %d", straal, oppCirkel(straal));
console.log("omtrek van een cirkel met straal %d is %d", straal, omtrekCirkel(straal));
