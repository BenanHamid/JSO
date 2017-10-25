'use strict';

var toetsenbord = require('readline-sync');
var tekst = toetsenbord.question("Geef een tekst: ");
var teller = 0;
for (var i = 0; i < tekst.length; i++) { //също така може да декларираме направо begin
    if (tekst.charAt(i) == 'i') teller++; // charAt - гледа колко пъти се използва буквата
}
console.log("De letter \"i\" komt " + teller + " maal voor");
// console.log('De letter "i" komt ' + teller + " maal voor");