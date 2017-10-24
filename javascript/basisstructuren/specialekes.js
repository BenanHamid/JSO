'use strict';

var smurf;  // = undefined

console.log(1+1);  // 2
console.log("1"+1); // 11
console.log(2*"10");  // 20
console.log(2*"smurf");  // NaN
console.log(5/0);   // Infinity
console.log(smurf);   // undefined

// we mogen (sleutelwoord) null toekennen aan een var
// om aan te geven dat die var momenteel geen bruikbare waarde bevat
smurf = null;
console.log(smurf); // null