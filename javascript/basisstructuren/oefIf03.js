'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question("punten: ");
var graad = "";
if (punten < 0 || punten > 20)
    graad = "Ongeldige score";
else {
    if (punten < 10)
        graad = "Onvoldoende";
    else {
        if (punten < 14)
            graad = "Voldoende";
        else {
            if (punten < 16)
                graad = "Onderscheiding";
            else {
                if (punten < 18)
                    graad = "Grote Onderscheiding";
                else
                    graad = "Grootste Onderscheiding";
            }
        }
    }
}

console.log(graad);