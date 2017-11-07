'use strict';

function maakString(lengte, karakter = ' '){
    var result = "";
    for(var i=0; i< lengte; i++){
        result += karakter;
    }
    return result;
}

function tekenGetallenPiramide(hoogte){
    var lijn;
    for(var i=1; i<= hoogte; i++){
        lijn = "";
        lijn += maakString(hoogte-i);
        lijn += maakString(i*2-1, i);
        console.log(lijn);
    }
}

tekenGetallenPiramide(5);