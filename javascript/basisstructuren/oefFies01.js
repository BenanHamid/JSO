'use strict';

var toetsenbord = require('readline-sync');

var getal1, getal2, getal3, grootste;

function max(getal1, getal2){
  var grootste;
  if(getal1 > getal2){
		grootste = getal1;
	}
	else{
	  grootste = getal2;
	}
	return grootste;
}

getal1 = parseInt(toetsenbord.question("Tik getal 1 in: "));
getal2 = parseInt(toetsenbord.question("Tik getal 2 in: "));
getal3 = parseInt(toetsenbord.question("Tik getal 3 in: "));
grootste = max(max(getal1,getal2),getal3);
console.log("Het grootste van deze 3 getallen is %d",grootste);