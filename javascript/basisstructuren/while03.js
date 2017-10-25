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