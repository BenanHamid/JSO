'use strict';

var toestenbord = require('readline-sync');

var studiepunten, score;
var nietGeslaagd = 0, geslaagd = 0;
var examen = 5; var gewicht = 0; var studiepunten = 0;
var result = 0;

for (var i = 1; i <= examen; i++) {
    var gewicht = Number(toestenbord.question('Tik de gewicht in: '));
    var score = parseInt(toestenbord.question('Geef een score van 0 to 20: '));
    while(isNaN(score)){
        var score = parseInt(toestenbord.question('Geef een score van 0 to 20: '));
    } 
    while (score < 0 || score > 20) {
        var score = parseInt(toestenbord.question('Geef een score van 0 to 20: '));
    }
    if (score < 10) {
        console.log('niet geslaagd')
        nietGeslaagd++
    } else {
        console.log('geslaagd')
        geslaagd++
    }
    studiepunten += gewicht
    result += gewicht * score
    console.log(gewicht, score);
}

console.log('\nGewogen gemiddelde = %s / %s = ',result, studiepunten, result/studiepunten)

console.log('De studen is geslaag voor %s en niet geslaagd voor %s', geslaagd, nietGeslaagd)
