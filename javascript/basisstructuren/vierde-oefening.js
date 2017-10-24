'use strict'

var toetsenbord = require('readline-sync');
var punten = parseInt(toetsenbord.question('Voer je punten in: '), 10);

switch (true) {
    case (punten < 10):
        console.log('Onvoldoende');
        break;
    case (punten >= 10 && punten < 14):
        console.log('Onderscheiding');
        break;
    case (punten >= 14 && punten < 16):
        console.log('Grote onderscheiding');
        break;
    case (punten >= 16 && punten < 18):
        console.log('Groote onderscheiding');
        break;
    case (punten >= 18 && punten <= 20):
        console.log('Grootste onderscheiding');
        break;
    default:
        console.log('Ongeldige score');
        break;
}