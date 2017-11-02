'use strict';

const SPATIE = " ";
var toetsenbord = require('readline-sync');

function aantalWoorden(zin, scheidingsteken = SPATIE) {
    var aantalSpaties = 0;
    var indexSpatie = zin.indexOf(scheidingsteken);
    while (indexSpatie > -1) {
        aantalSpaties++;
        indexSpatie = zin.indexOf(scheidingsteken, indexSpatie + 1);
    }
    return aantalSpaties + 1;
}

var zin = toetsenbord.question("zin: ");
console.log("%d woord(en)", aantalWoorden(zin));