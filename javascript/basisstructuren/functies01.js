'use strict';

var toetsenbord = require('readline-sync'); 
var getal = toetsenbord.question('Tik een getal in: ');
/*
// wat doet onderstaand script? //изчисляване на факториел? 

var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);
*/
// om deze berekening leesbaarder te maken en 
// toe te kunnen passen voor andere getallen, 
// gebruiken we een functie:

// functiedefinitie/-declaratie: //по-добре да се създаде нов var във функцията
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

// functie oproepen 
resultaat = faculteit(getal);
console.log(resultaat);
resultaat = faculteit(10); //constant
console.log(resultaat);
//console.log(faculteit(10));
if( faculteit(10) > 30000){
    console.log('10! is groter dan 30000');
}
