'use strict';

var toetsenbord = require('readline-sync');

var getallen = [];
var vraag_getal = parseInt(toetsenbord.question('Geef een unieke getal in: '));
for (var i = 0; i < 5; i++) {

    if (getallen.indexOf(vraag_getal) != -1) {
        console.log('ongeldig');
        //var vraag_getal = parseInt(toetsenbord.question('Geef een unieke getal in: '));
    }

    getallen.push(vraag_getal);
}


console.log(getallen);