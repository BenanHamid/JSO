'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur < 12) {
	console.log("Goedemorgen");
} else {
	console.log("Goedenamiddag");
}