'use strict';
var toetsenbord = require('readline-sync');
var result, geslacht, leeftijd, jongeVrouwen = 0, plus25Vrouwen = 0, jongeMannen = 0, plus25Mannen = 0;
geslacht = toetsenbord.question("Geef geslacht (m/v): ");
while ((geslacht == "m") || (geslacht == "v")) {
    leeftijd = toetsenbord.question("Geef leeftijd: ");
    leeftijd = parseInt(leeftijd);
    if (geslacht == "m") {
        if (leeftijd < 25) {
            jongeMannen = jongeMannen + 1;
        }
        else {
            plus25Mannen = plus25Mannen + 1;
        }
    }
    else {
        if (leeftijd < 25) {
            jongeVrouwen = jongeVrouwen + 1;
        }
        else {
            plus25Vrouwen = plus25Vrouwen + 1;
        }
    }
    geslacht = toetsenbord.question("Geef geslacht (m/v): ");
}
result = "\t<25\t>=25\nmannen\t"+jongeMannen+"\t"+plus25Mannen+"\nvrouwen\t"+jongeVrouwen+"\t"+plus25Vrouwen;
console.log(result);

// \t - табулация \n - нов ред