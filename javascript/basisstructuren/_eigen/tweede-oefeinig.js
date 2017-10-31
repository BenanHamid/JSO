//oefeningen voor if, oplossing oefif01.js en oefif02.js

'use strict';

var toetsenbord = require('readline-sync');

var naam = toetsenbord.question('Tik je naam in: ');
var leeftijd = toetsenbord.question('Tik je leeftijd in: ');

if (leeftijd <= 14) {
    console.log('Sorry, deze pagina is enkel voor kinderen!');
} else {
    console.log('Welkom %s !', naam);
}

var bedrag = toetsenbord.question('Tik je bedrag in: ');

if (bedrag > 5) {
    console.log('Voor mij een ijsje met 3 bollen en slagroom aub.');
} else {
    console.log('Ik zal wel een platte water drinken.');
}