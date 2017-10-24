'use strict';

var datum = new Date(); // за извикване на ситемната дата
var uur = datum.getHours(); // за извикване на часа

// var uur = datum.getHours();

if (uur < 12) {
	console.log("Goedemorgen");
} else { // else не е задължителен, може само да се изплънява if
	console.log("Goedenamiddag");
}

// ако има само един stateitment може да се изпише като // if (uur < 12) console.log("Goedemorgen");

/*
if (uur < 12) 
console.log("Goedemorgen");
console.log("Goedenamiddag");

// JS ще изпълни само първото, защото си мисли, че използваме само един staitment
*/

if (uur != 12) {
	console.log('de middagpauze is niet bezig');
}
else {
	console.log('het is middagpauze');
}

if (uur >= 9 && uur <= 12) { // && използва се за 'и'
	console.log('de werkvoormiddag is bezig');
}

if (uur < 9 || uur > 18) {
	console.log('buiten de werkuren');
}