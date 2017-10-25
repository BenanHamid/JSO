'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script? //изчисляване на факториел? 
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);

// functiedefinie/-declaratie:
function faculteit(x) {
    var result = 1; //по-добре да се създаде нов var във функцията
    for (var j = 2; j <= x; j++) {
        result *= j;
    }
    return result;
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