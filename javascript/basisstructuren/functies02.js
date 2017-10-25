'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, macht;

/* functiedefinities of -declaraties */
function berekenTweedeMacht(getal) {
    var resultaat;
    resultaat = getal * getal;
    return resultaat;
}

function berekenMacht(grondtal1, exponent) {
    var resultaat = 1;
    for (var i = 1; i <= exponent; i++) {
        resultaat *= grondtal1
    }
    return resultaat;
}

// functies oproepen ("gebruiken")
getal1 = toetsenbord.question("Geef eerste getal: ");
macht = berekenTweedeMacht(getal1);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal1, macht);
getal2 = toetsenbord.question("Geef tweede getal: ");
macht = berekenTweedeMacht(getal2);
console.log("Het getal %d vermenigvuldigd met zichzelf is %d", getal2, macht);
macht = berekenMacht(getal1, getal2);
console.log('%d tot de %de macht is %d', getal1, getal2, macht);
macht = berekenMacht(getal1 + 5, 2 * getal2 + 8); //argument в скобите