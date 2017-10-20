'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur == 9) {
	console.log("Tussen 9 en 10 kan je eens naar koffie zien");
} else if (uur == 12) {
	console.log("Tussen 12 en 1 eet iedereen");
} else if (uur == 18) {
	console.log("Tussen 6 en 7 begint een werkmens te leven");
} else {
	console.log("Werk maar rustig verder");
}