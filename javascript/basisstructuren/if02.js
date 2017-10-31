'use strict';

var datum = new Date(); // дата
var uur = datum.getHours(); // час
if (uur == '10') { // http://www.c-point.com/javascript_tutorial/jsgrpComparison.htm
	// == '9' ще работи, защото скрипта го конвертира в числото 9
	// === гледа дали са от един и същ тип, тоест число и число, а не както е при == скрипта го конвертира автоматично към число
	console.log("Tussen 9 en 10 kan je eens naar koffie zien");
} else if (uur == 12) {
	console.log("Tussen 12 en 1 eet iedereen");
} else if (uur == 18) {
	console.log("Tussen 6 en 7 begint een werkmens te leven");
} else {
	console.log("Werk maar rustig verder");
}