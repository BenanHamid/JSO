'use strict';

var toetsenbord = require('readline-sync');

function naarAntwerps(tekst) {
    var nieuweTekst = "";
    for (var i = 0; i < tekst.length; i++) {
        if (tekst.charAt(i) != "h" && tekst.charAt(i) != "H") {
            nieuweTekst = nieuweTekst + tekst.charAt(i);
        }
    }
    return nieuweTekst;
}

function naarLimburgs(tekst) {
    var nieuweTekst = "";
    for (var i = 0; i < tekst.length; i++) {
        switch (tekst.charAt(i)) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
            case 'y':
            case 'Y':
                nieuweTekst = nieuweTekst + tekst.charAt(i);
        }
        nieuweTekst = nieuweTekst + tekst.charAt(i);
    }
    return nieuweTekst;
}

var tekst = toetsenbord.question("Geef een tekst: ");
var antwerps = naarAntwerps(tekst);
var limburgs = naarLimburgs(tekst);
console.log("De antwerpse vertaling is %s", antwerps);
console.log("De limburgse vertaling is %s", limburgs);