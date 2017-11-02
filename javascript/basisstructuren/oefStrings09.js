// terzijde: zie juiste regel voor geboortejaren voor en na 2000 op
// https://nl.wikipedia.org/wiki/Rijksregisternummer
// -> laatste 2 cijfers van rrn vormen controlegetal
// Noem getal bestaande uit eerste 9 cijfers g, dan geldt
// ALS het controlegetal gelijk is aan 97 - (g % 97)
// DAN is de persoon geboren voor 2000
// ANDERS is de persoon geboren in 2000 of later
'use strict';

var toetsenbord = require('readline-sync');

function geslacht(rrn) {
    var volgnr = rrn.substring(7, 10);
    return volgnr % 2 == 0 ? "vrouw" : "man";
}

function geboorteJaarInVierCijfers(rrn) {
    var geboorteDatumEnVolgnr = rrn.substr(0, 6)+rrn.substr(7,3);
    var geboorteJaar = parseInt(rrn.substr(0, 2));
    var controleCijfers = parseInt(rrn.substr(11, 2));
    var controleCijfersVoor2000 = 97 - (geboorteDatumEnVolgnr % 97);
    if (controleCijfers == controleCijfersVoor2000) {
        return 1900 + geboorteJaar;
    }
    return 2000 + geboorteJaar;

}

function leeftijd(rrn) {
    var vandaag = new Date();
    var huidigeDag = vandaag.getDate();
    var huidigeMaand = vandaag.getMonth() + 1;
    var huidigJaar = vandaag.getFullYear();
    var geboorteJaar = geboorteJaarInVierCijfers(rrn);
    var geboorteMaand = parseInt(rrn.substr(2, 2));
    var geboorteDag = parseInt(rrn.substr(4, 2));
    var geboorteGetal = geboorteJaar * 10000 + geboorteMaand * 100 + geboorteDag;
    var vandaagGetal = huidigJaar * 10000 + huidigeMaand * 100 + huidigeDag;
    return Math.floor((vandaagGetal - geboorteGetal) / 10000);
}

var rijksregisterNummer = toetsenbord.question("rijksregisternummer: ");
console.log("Deze persoon is een %s", geslacht(rijksregisterNummer));
console.log("Deze persoon is %d jaar", leeftijd(rijksregisterNummer));