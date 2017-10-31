'use strict';

// een functie zonder expliciete return
function tekenHuisje() { // когато функцията не прави някакво изчисление, тогава return може да се премахне
    console.log("   *");
    console.log("  * *");
    console.log(" *   *");
    console.log("*******");
    console.log("*     *");
    console.log("*     *");
    console.log("*******");
    // hier staat impliciet    return undefined; // кога не се напише return тогава JS сам поставя return undefined;
}

tekenHuisje();

// klassikale oef.:
// schrijf een functie om een vierkant met doorgegeven
// zijde te tekenen

function tekenVierkant(zijde) {
    var resultaat;
    for (var rij = 1; rij <= zijde; rij++) {
        resultaat = '';
        for (var i = 1; i <= zijde; i++) {
            // console.log('*'); // връща резултата в нов ред
            resultaat += '*';
        }
        console.log(resultaat);
    }
}

tekenVierkant(4);
tekenVierkant(3);