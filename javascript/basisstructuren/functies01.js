'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');
/*
// wat doet onderstaand script?
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);
*/
// om deze berekening leesbaarder te maken en 
// toe te kunnen passen voor andere getallen, 
// gebruiken we een functie:

// functiedefinitie/-declaratie:
function faculteit(x) {
    console.log("functie wordt uitgevoerd")
    var result = 1;
    for (var j = 2; j <= x; j++) {
        result *= j;
    }
    return result;
    // return
    // => beeindig functie en geef waarde die achter return staat terug als uitkomst
    // (als een fie geen expliciete returnwaarde heeft, 
    // geeft ze impliciet undefined terug)
}


// functie oproep:
var resultaat = faculteit(getal);
console.log(resultaat);
console.log(faculteit(10));
if( faculteit(5) < 20){
    console.log("5! is kleiner dan 20");
}
