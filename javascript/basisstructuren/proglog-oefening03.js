/*'use strict';

var toetsenbord = require('readline-sync');
var vraag = toetsenbord.question('Hoeveel anndelen Fortis wilt u kopen? Tik je aantal in: ');
var aantal = parseInt(vraag);
const FORTIS = 3.75;
var bedrag = FORTIS * aantal;
const euro = 100;
var i,  som = 0;


for (i=1; som <= euro; i++) {
    som += bedrag;
    console.log('U heeft ' + aantal + ' gekocht voor ' + som + ' EUR \n');
    var vraag = toetsenbord.question('Hoeveel anndelen Fortis wilt u kopen? Tik je aantal in: ');
    var aantal = parseInt(vraag);
    bedrag = FORTIS * aantal;
    if(som > euro){
        console.log('Uw geld is op!');
    }
}

*/

'use strict';

var toetsenbord = require('readline-sync');
var vraag = toetsenbord.question('Hoeveel anndelen Fortis wilt u kopen? Tik je aantal in: ');
var aantal = parseInt(vraag);
var FORTIS = 3.75;
var bedrag = FORTIS * aantal;
var inf = 0.10 * aantal;
const euro = 100;
var i, y, som = 0;


for (i = 1; som <= euro; i++) {
    som += bedrag;
    FORTIS -= 0.10

    console.log('U heeft ' + aantal + ' gekocht voor ' + som + ' EUR');
    console.log('De huidige waarde van uw portefeuille is: ' + (som - inf) + ' EUR\n')
    

    var vraag = toetsenbord.question('Hoeveel anndelen Fortis wilt u kopen? Tik je aantal in: ');
    var aantal = parseInt(vraag);
    
    bedrag = FORTIS * aantal;

    if (som > euro) {
        console.log('Uw geld is op!');
    }
}
