'use strict';

var i = 1;
var msg;
while (i <= 10) { //; след скобите може да спре while
    // TODO/ msg waarde geven
    /*if( i % 2 == 0) {
        msg = 'even';
    } else {
        msg = 'oneven';
    }*/
    msg = i % 2 == 0 ? 'even' : 'oneven';
    console.log("%d is %s", i, msg);
    i++
}
// let op!  als je een ; na de voorwaarde van de while schrijft,
// is dat de inhoud van de lus en veroorzaak je een oneindige lus
// (blok tussen accolades hoort dan niet meer bij while)
// while (i <= 10); {   // oneindige lus!!!
while (i <= 10) {
    /*
    if( i % 2 == 0){
        msg = "even";
    }
    else{
        msg = "oneven";
    }
    */
    msg = i % 2 == 0 ? "even" : "oneven";
    console.log("%d is %s", i, msg);
    i++;
}