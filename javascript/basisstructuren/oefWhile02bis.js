'use strict';

var toetsenbord = require('readline-sync');

var som = 0, getal, aantal;
for(aantal=1; aantal <= 5; aantal++ ){
    getal = toetsenbord.question("Geef getal "+aantal+": ");
    while (isNaN(getal)) { // докато не се въведе число, ще се повтаря въпроса.
        getal = toetsenbord.question("Geef getal "+aantal+": ");
    }
    som = som + parseInt(getal); //som += parseInt(getal);
}
console.log("De som is %s", som);
