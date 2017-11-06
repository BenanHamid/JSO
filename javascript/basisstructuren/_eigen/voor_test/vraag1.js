'use strict';

var string;
/*function maakString(lengte, karakter = ' ') {
    // TODO: geef een string bestaande uit lengte keer karakter naast elkaar terug
    // gebruik een spatie als karakter als het karakter niet doorgegeven wordt
    string = '';
    for(var i=1; i <= lengte; i++){
        string += karakter;
    }
}*/

function tekenGetallenPiramide(hoogte) {
    for (var i = 0; i < hoogte; i++) {
        var result = '';
        for (var j = 0; j < hoogte - i; j++) {
            result += ' ';
        }
        for (var x = 0; x <= i; x++) {
            result += i + 1 + ' ';
        }
        console.log(result);
    }
}

tekenGetallenPiramide(5)

// TODO: teken een getallenpiramide van 5 hoog. Gebruik hiervoor een zelfgeschreven functie

