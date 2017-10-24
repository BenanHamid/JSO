'use strict';
var toetsenbord = require('readline-sync');
var result, geslacht, leeftijd, jongeVrouwen = 0, oudeVrouwen = 0, jongeMannen = 0, oudeMannen = 0;
geslacht = toetsenbord.question("Geef geslacht (m/v): ");
while ((geslacht == "m") || (geslacht == "v")) {
    leeftijd = toetsenbord.question("Geef leeftijd: ");
    leeftijd = parseInt(leeftijd);
    if (geslacht == "m") {
        if (leeftijd < 25) {
            jongeMannen = jongeMannen + 1;
        }
        else {
            oudeMannen = oudeMannen + 1;
        }
    }
    else {
        if (leeftijd < 25) {
            jongeVrouwen = jongeVrouwen + 1;
        }
        else {
            oudeVrouwen = oudeVrouwen + 1;
        }
    }
    geslacht = toetsenbord.question("Geef geslacht (m/v): ");
}
result = "\t<25\t>=25\nmannen\t"+jongeMannen+"\t"+oudeMannen+"\nvrouwen\t"+jongeVrouwen+"\t"+oudeVrouwen;
console.log(result);
