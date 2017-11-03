'use strict';

var toetsenbord = require('readline-sync');

var maxGetal, getal1, getal2, teller, juist, uitkomst, aantalJuist = 0;

function geefGetal(bovengrens) {
	return Math.floor(1 + Math.random() * bovengrens);
}

function evalueerProduct(getal1, getal2, uitkomst) {
	return getal1 * getal2 == uitkomst;
}

function toonMeldingBijUitkomst(juist) {
	var antwoordnr = geefGetal(4);
	if (juist) {
		switch (antwoordnr) {
			case 1: console.log("Goed zo !"); break;
			case 2: console.log("Uitstekend !"); break;
			case 3: console.log("Knap gedaan !"); break;
			case 4: console.log("Flink gewerkt !"); break;
		}
	}
	else {
		switch (antwoordnr) {
			case 1: console.log("Verkeerd !"); break;
			case 2: console.log("Dit is niet juist !"); break;
			case 3: console.log("Fout !"); break;
			case 4: console.log("Niet goed !"); break;
		}
	}
}

function toonMeldingBijTotaal(getal) {
	if (getal < 5) {
		console.log("Dit is onvoldoende.");
	}
	else {
		switch (getal) {
			case 5: case 6: console.log("Je moet nog veel oefenen !"); break;
			case 7: console.log("Dat is OK."); break;
			case 8: console.log("Een goede score !"); break;
			case 9: console.log("Dat heb je heel goed gedaan !"); break;
			case 10: console.log("Proficiat ! Je hebt uitstekend gewerkt !"); break;
		}
	}
}

// hoofdprogramma
maxGetal = parseInt(toetsenbord.question("Tik bovengrens in: "));
for (teller = 1; teller <= 10; teller++) {
	getal1 = geefGetal(maxGetal);
	getal2 = geefGetal(maxGetal);
	uitkomst = parseInt(toetsenbord.question("Hoeveel is " + getal1 + " x " + getal2 + "? "));
	juist = evalueerProduct(getal1, getal2, uitkomst);
	toonMeldingBijUitkomst(juist);
	if (juist) {
		aantalJuist++;
	}
}
console.log("Je hebt %d op 10", aantalJuist);
toonMeldingBijTotaal(aantalJuist);
