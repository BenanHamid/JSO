'use strict';

var getal = 0;

function verhoogGlobaleVar() {
    // een functie heeft toegang tot de globale variabelen
    // die buiten de fie gedecl zijn
    getal++;
}

for (var i = 0; i < 5; i++) {
    verhoogGlobaleVar();
    console.log(getal);
}

/*
function fieMetLokaleVar(){
    // een functie kan lokale var declareren, d.i.
    // var die enkel in de fie gekend zijn
    // var verplicht bij decl van lokale var!!!
    // will. getal ts 0 (incl) en 1 (excl)
    var lokaal = Math.random();  // kommagetal tussen 0 en 1
    lokaal *= 100;
    lokaal = Math.floor(lokaal);
    console.log("in de fie heeft lokaal waarde %d", lokaal);
}

fieMetLokaleVar();
// console.log(lokaal);  // fout bij uitvoering; 
// want een lokale var is niet gekend buiten de fie
*/

/*
function fieMetNieuweGlobaleVar(){
    // dit kan enkel zonder 'use strict'!
    // als in een fie een toekenning aan een niet-gedecl var
    // gedaan wordt, wordt een globale var met die naam gemaakt
    globaal = Math.random(); 
    globaal *= 100;
    globaal = Math.floor(globaal);
    console.log("in de fie heeft globaal waarde %d", globaal);
}

fieMetNieuweGlobaleVar();
console.log(globaal);
*/