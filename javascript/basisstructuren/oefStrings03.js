'use strict';

var toetsenbord = require('readline-sync');

var zin, i;
var result = "";
zin = toetsenbord.question("Geef een zin: ");

// eerste poging:
// result = zin.replace(",", ", ");  // fout (enkel eerste komma wordt vervangen)
// met reguliere expressie (zie later):
result = zin.replace(/,/g, ", ");
console.log(result);

// alternatief zonder reguliere expressie:
result = "";
for (i = 0; i < zin.length; i++) {
    result += zin.charAt(i);
    if (zin.charAt(i) == ",") {
        result += " ";
    }
}
console.log(result);