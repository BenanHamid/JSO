'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question("punten: ");
var graad = "";
switch (true) { // switch гледа expresie дали е true или false, в случая гледа дали числата са по-малки или по-големи от 0 или 20. 
    case punten < 0:
    case punten > 20:
        graad = "ongeldige score"; 
        break;
    case punten < 10:
        graad = "Onvoldoende";
        break;
    case punten < 14:
        graad = "Voldoende";
        break;
    case punten < 16:
        graad = "Onderscheiding";
        break;
    case punten < 18:
        graad = "Grote Onderscheiding";
        break;
    default:
        graad = "Grootste Onderscheiding";
}
console.log(graad);