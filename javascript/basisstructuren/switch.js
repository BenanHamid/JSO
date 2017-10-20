'use strict';

var datum = new Date();
var uur = datum.getHours();
switch (uur) {
    case 9:
        console.log("Tussen 9 en 10 kan je eens naar koffie zien");
        break;
    case 12:
        console.log("Tussen 12 en 1 eet iedereen");
        break;
    case 18:
        console.log("Tussen 6 en 7 begint een werkmens te leven");
        break;
    default:
        console.log("Werk maar rustig verder");
}