'use strict';

var toetsenbord = require('readline-sync');
var string = 'Er zijn geen verschillende getalen.'
var getal1, getal2, getal3;

function max(getal1, getal2){
    var resultaat;
    if(getal1 > getal2){
        resultaat = getal1
    } else if(getal1 < getal2) {
        resultaat = getal2
    } else {
        resultaat = string
    }
    return resultaat;
}

var getal1 = toetsenbord.question('Tik je eerste getal in: ');
var getal2 = toetsenbord.question('Tik je tweede getal in: ');

console.log(max(getal1, getal2));

var getal3 = toetsenbord.question('Tik je derde getal in: ');
console.log(max(getal1, getal2, getal3));