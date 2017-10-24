'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question("punten: ");
var graad = "";
if (punten >= 0 && punten <= 20) {
    switch (parseInt(punten)) {
        case 10:
        case 11:
        case 12:
        case 13:
            graad = "Voldoende";
            break;
        case 14:
        case 15:
            graad = "Onderscheiding";
            break;
        case 16:
        case 17:
            graad = "Grote Onderscheiding";
            break;
        case 18:
        case 19:
        case 20:
            graad = "Grootste Onderscheiding";
            break;
        default: graad = "Onvoldoende";
    }
}
else {
    graad = "ongeldige score";
}
console.log(graad);