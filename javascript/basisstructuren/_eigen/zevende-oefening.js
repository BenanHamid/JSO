//нуждае се от доразработване
'use strict';

var toetsenbord = require('readline-sync');
var geslacht = toetsenbord.question('Geslacht m of v? ');
var leeftijd = toetsenbord.question('Leeftijd? ');
var mOutput1 = 0, mOutput2 = 0, vOutput1 = 0, vOutput2 = 0;

while ((geslacht == 'm') || (geslacht == 'v')) {
    var geslacht = toetsenbord.question('Geslacht m of v? ');
    var leeftijd = toetsenbord.question('Leeftijd? ');
    if (geslacht == 'm' && leeftijd < 25) {
        mOutput1 = mOutput1 + 1;
    } else if (geslacht == 'm' && leeftijd >= 25) {
        mOutput2 = mOutput2 + 1;
    } else if (geslacht == 'v' && leeftijd < 25) {
        vOutput1 = vOutput1 + 1;
    } else if (geslacht == 'v' && leeftijd >= 25) {
        vOutput2 = vOutput2 + 1;
    }
}

console.log('mannen <25: ' + mOutput1);
console.log('mannen >=25: ' + mOutput2);
console.log('vrouwen <25: ' + vOutput1);
console.log('vrouwen >=25: ' + vOutput2);