'use strict';
var toestsenbord = require('readline-sync');

function mijlenNaarKm(afstand) {
    return afstand * 0.62137;
}
mijlenNaarKm(2);

function leesEenheid() {
    while ((invoer != 'K') && (invoer != 'k') && (invoer != 'm') && (invoer != 'M')) {
        var invoer = toestsenbord.question('"k", "K", "m" of "M" ');
    }
}
leesEenheid();


function boeteBijSnelheidsovertreding(t_snelheid, g_snelheid, unit) {
    t_snelheid += g_snelheid;
    if (g_snelheid == 0) {
    } else if (g_snelheid >= 1 && g_snelheid <= 10) {
        console.log('1')
    } else if (g_snelheid >= 11 && g_snelheid <= 30) {
        console.log('2')
    } else { 
        console.log('3')
    }
}

boeteBijSnelheidsovertreding(0, 22, 0);