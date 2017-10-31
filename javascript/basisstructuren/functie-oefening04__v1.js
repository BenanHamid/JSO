'use strict'; //трябва да се дооправи

var toetsenbord = require('readline-sync');
var bovengrens = parseInt(toetsenbord.question('Tik de bovengrens in: '));

function geefGetal(bovengrens) {
    var eerstGetal = Math.random();
    eerstGetal *= bovengrens;
    eerstGetal = Math.floor(1 + eerstGetal);
    console.log('Eerste getal is: ' + eerstGetal);
    
    tweedeGetal *= bovengrens;
    tweedeGetal = Math.floor(1 + tweedeGetal);
    console.log('Tweede getal is: ' + tweedeGetal);
}

geefGetal();
console.log(eerstGetal * tweedeGetal);

var a = eerstGetal;
var b = tweedeGetal;
var derdeGetal = toetsenbord.question('Tik het product in: ');
var c = derdeGetal;

function evalueerProduct(a, b, c) {
    if (a * b == c) {
        return true
    } else {
        return false
    }
}

var isJuist = evalueerProduct(a, b, c);
console.log(isJuist);

/*
function toonMeldingBijUitkomst(x) {
    if (x == true) {
        console.log('Juist');
    } else {
        console.log('Fout');
    }
}
*/
var antwoord = 0;
var resultaat;

function toonMeldingBijUitkomst(x) {
    for (var i = 1; i <= 10; i++) {
        var getal1;
        var getal2; 
        resultaat = parseInt(toetsenbord.question(eerstGetal + " * " + tweedeGetal + "= ? ")); 
        var isJuist = evalueerProduct(eerstGetal, tweedeGetal, uitkomst);       
        if (x == true) {
            antwoord++
            console.log('Juist');
        } else {
            console.log('Fout');
        }
    }
}

toonMeldingBijUitkomst(isJuist);

var y = antwoord;

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