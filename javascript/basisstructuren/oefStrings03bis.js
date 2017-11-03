'use strict';

var toetsenbord = require('readline-sync');

var zin, i;
var result = "";
zin = toetsenbord.question("Geef een zin: ");
for (i = 0; i < zin.length; i++) {
    result += zin.charAt(i);
    if (zin.charAt(i) == "," && zin.charAt(i+1) != " ") {
        result += " ";
    }
}
console.log(result);


