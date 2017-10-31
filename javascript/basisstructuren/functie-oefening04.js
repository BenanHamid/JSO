'use strict'; //трябва да се дооправи

var maxGetal, getal1, getal2, resultaat, antwoord = 0

var toetsenbord = require('readline-sync');

function geefGetal(bovengrens) {
    var getal = Math.random();
    getal *= bovengrens;
    getal = Math.floor(1 + getal);
    return getal;
}

function evalueerProduct(getal1, getal2, bovengrens) {
    if (getal1 * getal2 == resultaat) {
        return true
    } else {
        return false
    }
}

var isJuist = evalueerProduct(getal1, getal2, resultaat);

var x;
function toonMeldingBijUitkomst(isJuist) {
    if (isJuist == true) {
        console.log('Juist');
    } else {
        console.log('Fout');
    }
}

function toonMeldingBijTotaal(y) {
    switch (y) {
        case 1:
        case 2:
        case 3:
        case 4:
            console.log('onvoldoende');
            break;
        case 5:
        case 6:
            console.log('nog veel oefenen');
            break;
        case 7:
            console.log('OK');
            break;
        case 8:
            console.log('een goede score !');
            break;
        case 9:
            console.log('heel goed !');
            break;
        case 10:
            console.log('proficiat ! uitstekend ! ');
            break;
    }
}

toonMeldingBijTotaal(antwoord);

var y = antwoord;
var bovengrens = parseInt(toetsenbord.question('Tik de bovengrens in: '));
for (var i = 1; i <= 10; i++) {
    var getal1 = geefGetal(bovengrens);;
    var getal2 = geefGetal(bovengrens);;
    resultaat = parseInt(toetsenbord.question(getal1 + " * " + getal2 + "= ? "));
    var isJuist = evalueerProduct(getal1, getal2, resultaat);
    if (isJuist == true) {
        antwoord++
        console.log('Juist');
    } else {
        console.log('Fout');
    }
}
console.log("Je hebt %d op 10", antwoord);
