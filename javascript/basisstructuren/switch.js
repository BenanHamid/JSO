'use strict';

var datum = new Date();
var uur = datum.getHours();
switch (uur) {
    case 9:     // може да се използват няколко case-а за изпълнението на един statement
    case 10:
    case 11:
        console.log("Tussen 9 en 10 kan je eens naar koffie zien");
        break; // break прекрати switch и продължи напред след switch
               // fall trough
               // break е задължителен, ако искаме да прекратим case, иначе продължава да изпълнява до следващият case или до приключването на switch.
    case 12:
        console.log("Tussen 12 en 1 eet iedereen");
        break;
    case 18:
        console.log("Tussen 6 en 7 begint een werkmens te leven");
        break;
    default:
        console.log("Werk maar rustig verder");
}