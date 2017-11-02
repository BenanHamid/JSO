'use strict';

var toetsenbord = require('readline-sync');

var woord, i, isPalindroom;
woord = toetsenbord.question("Geef een woord: ");
i = 0;
while ((i < woord.length / 2) && (woord.charAt(i) == woord.charAt(woord.length - 1 - i))) {
    i++;
}
isPalindroom = i >= (woord.length / 2);
console.log("%s is %s palindroom.", woord, isPalindroom ? "een" : "geen");



