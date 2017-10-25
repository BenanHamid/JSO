'use strict';

var aantal = 99;
var beginAantal;
var recipient = 'bottles';
var recipient2 = 'bottle';
var inhoud = 'beer';

var toetsenbord = require('readline-sync');
var antwoord = toetsenbord.question('Tik je antwoord in: ');
var startGetal = toetsenbord.question('Tik je startgetal in: ');

for(beginAantal = aantal; aantal > 0; aantal--){
    if(aantal > 1){
        console.log(aantal + ' %s of %s on the wall, ' + aantal + ' %s of %s.\nTake one down and pass it around, ' + aantal + ' %s of %s on the wall.\n', recipient, inhoud, recipient, inhoud, recipient, inhoud);}
    else {
        console.log(aantal + ' %s of %s on the wall, ' + aantal + ' %s of %s.\nTake one down and pass it around, ' + aantal + ' %s of %s on the wall.\n', recipient2, inhoud, recipient2, inhoud, recipient2, inhoud);
    }
}

console.log('No more %s of %s on the wall, no more %s of %s.\nGo to the store and buy some more, ' + beginAantal +' %s of %s on the wall.', recipient, inhoud, recipient, inhoud, recipient, inhoud);