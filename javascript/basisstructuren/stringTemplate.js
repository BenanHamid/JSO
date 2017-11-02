// bron: https://egghead.io/lessons/ecmascript-6-string-templates?course=learn-es6-ecmascript-2015

var begroeting = "Hello";
var bericht = begroeting +" world!";
console.log(bericht);

// in es6 met een string template:
// in een string template wordt een uitdrukking ${e} vervangen door de waarde van expressie e
// let op! juiste soort quotes gebruiken 
var bericht2 = `${begroeting} world!`;
console.log(bericht2);
// in de expressie mag een berekening staan
console.log(`${begroeting.toUpperCase()} world!`);

// white space in een template string wordt niet genegeerd
var berichtMetNieuweLijn = `Wat
	een
		leven!
				${begroeting}!`;
console.log(berichtMetNieuweLijn);