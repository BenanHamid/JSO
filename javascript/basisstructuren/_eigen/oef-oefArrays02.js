'use strict';

var toetsenbord = require('readline-sync');
var vraag_naam, vraag_omzet;

var verkopers = new Array('Jan', 'Piet', 'Joris', 'Corneel');
var omzet = new Array(verkopers.length);

for (var i = 0; i < omzet.length; i++) {
    omzet[i] = 0;
}

//omzet.fill(0);
vraag_naam = toetsenbord.question('Geef de naam in: ');
while (vraag_naam != 'einde') {
    
    if (verkopers.indexOf(vraag_naam) != -1) {
        vraag_omzet = parseFloat(toetsenbord.question('Tik de omzet in: '));
        omzet[verkopers.indexOf(vraag_naam)] += vraag_omzet;
    } else {
        console.log('Ongeldige naam!')
    }

    console.log();

    vraag_naam = toetsenbord.question('Geef de naam in: ');
}

for (var i = 0; i < verkopers.length; i++) {
    //console.log(verkopers[i] + ' ' +  omzet[i]);
    //console.log(verkopers[i] , omzet[i]);
    console.log("De omzet van %s is %s euro", verkopers[i], omzet[i])
}

/*
if (vraag_naam.toLocaleLowerCase() == verkopers[0].toLocaleLowerCase()) {
    vraag_omzet = parseFloat(toetsenbord.question('Tik de omzet in: '));
    omzet[0] += vraag_omzet;
} else if (vraag_naam == verkopers[1]) {
    vraag_omzet = parseFloat(toetsenbord.question('Tik de omzet in: '));
    omzet[1] += vraag_omzet;
} else if (vraag_naam == verkopers[2]) {
    vraag_omzet = parseFloat(toetsenbord.question('Tik de omzet in: '));
    omzet[2] += vraag_omzet;
} else if (vraag_naam == verkopers[3]) {
    vraag_omzet = parseFloat(toetsenbord.question('Tik de omzet in: '));
    omzet[3] += vraag_omzet;
} else {
    console.log('Geen geldige naam!')
}
*/